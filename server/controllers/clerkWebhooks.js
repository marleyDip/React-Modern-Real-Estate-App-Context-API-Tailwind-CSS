import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    //create a Svix instance
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // get headers
    const headers = {
      "svix-id": req.headers["svix-id"],

      "svix-timestamp": req.headers["svix-timestamp"],

      "svix-signature": req.headers["svix-signature"],
    };

    // verifying headers
    await whook.verify(JSON.stringify(req.body), headers);

    // getting data from request body
    const { type, data } = req.body;

    //switch case for different event types
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          username: data.first_name + " " + data.last_name,
          image: data.image_url,

          // data.email_address[0] → gets the first email object in that array.
          // data.email_address[0].email_address → extracts the actual email string.
        };
        await User.create(userData);
        break;
      }

      case "user.updated": {
        const userData = {
          _id: data.id,
          email: data.email_address[0].email_address,
          username: data.first_name + " " + data.last_name,
          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }
    res.json({ message: "Webhook Received", success: true });
  } catch (error) {
    console.log(error);

    res.json({ message: error.message, success: false });
  }
};

export default clerkWebhooks;

/* An example of webhook payload from clerk
 {
  "id": "user_12345",
  "first_name": "John",
  "last_name": "Doe",
  "image_url": "https://example.com/avatar.png",
  "email_address": [
    {
      "id": "idn_abc123",
      "object": "email_address",
      "email_address": "john.doe@example.com",
      "verification": {
        "status": "verified"
      }
    }
  ]
}
 
*/
