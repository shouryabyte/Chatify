//todo
import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV:process.env.NODE_ENV,
    RESEND_API_KEY:process.env.RESEND_API_KEY,
    EMAIL_FROM:process.env.EMAIL_FROM,
    EMAIL_FROM_NAME:process.env.EMAIL_FROM_NAME,
    CLIENT_URL:process.env.CLIENT_URL

}


// PORT=3000
// MONGO_URI=mongodb+srv://shourya98355_db_user:xJh9SAMP7yM62Ppo@cluster0.qhkte18.mongodb.net/heyThere_db?retryWrites=true&w=majority&appName=Cluster0
// NODE_ENV=development

// JWT_SECRET=myjwtsecert

// RESEND_API_KEY=re_AAyUPAiy_gPL6ZAkQse7YMDD7b7Pirnhj

// EMAIL_FROM="onboarding@resend.dev"
// EMAIL_FROM_NAME="Shourya Singh"
// CLIENT_URL=http://localhost:5173