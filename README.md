# Git & GitHub Workshop: Participant Showcase

Welcome to our workshop project\! The goal of this repository is to give you hands-on experience with the complete GitHub pull request workflow. By following the steps below, you'll add your own profile card to our live showcase page.

Live Demo

Click Here to See the Live Project: https://git-workshop-app.vercel.app/

-----

How to Contribute

Follow these steps carefully to add your profile card. This is the core skill you'll be learning in this workshop\!

Step 1: Fork the Repository

Click the "Fork" button at the top-right of this page. This will create a personal copy of the project in your own GitHub account.

Step 2: Clone Your Fork

Now, clone your forked repository to your local machine. Go to your forked repository, click the green "\< \> Code" button, and copy the HTTPS URL.

Run the following command in your terminal:
git clone []


Step 3: Create a New Branch

Navigate into the cloned directory and create a new branch to work on your changes. It's important to work on a separate branch, not on main.

cd your-project-name
git checkout -b add-your-name
(You can replace add-your-name with something like feat-john-doe.)

Step 4: Add Your Details

This is the most important step\!

1.  Open the project in your code editor (like VS Code).
2.  Navigate to the file: /app/data/participants.ts.
3.  Add your information by copying the object format below and filling it in with your details. Place your object at the end of the participants array, and remember to add a comma after the previous object.

// /app/data/participants.ts
export const participants = [
{
name: "Your Name",
github: "your-github-username",
bio: "Workshop organizer and tech enthusiast\!",
},
// Add your object below this line, following the same format.
{
name: "Yash Sharma", // Your full name
github: "Yashb404", // Your GitHub username
bio: "A student developer interested in web technologies\!", // A short bio
}, // Make sure the previous person's object has a comma after it\!
];

Step 5: Commit Your Changes

Save the file, then stage and commit your changes with a descriptive message.

# Stage the file you changed

git add app/data/participants.ts

# Commit the changes

git commit -m "feat: Add [Your Name] to participants list"

Step 6: Push to Your Fork

Push your new branch and your commit up to your forked repository on GitHub.

git push origin add-your-name
(Make sure add-your-name matches the branch name you created in Step 3).

Step 7: Create a Pull Request (PR)



1.  Go to your forked repository on GitHub.
2.  You should see a banner with your recent push. Click the "Compare & pull request" button.
3.  Give your pull request a title (e.g., "Add Yash Sharma's Profile") and a brief description.
4.  Click "Create pull request".

Congratulations\! You've just made a pull request. Now, wait for the workshop organizers to review and merge your contribution. Once merged, your card will appear on the live site\!

-----

(Optional) Running the Project Locally

If you want to see your card on your machine before you push, you can run the project locally.

1.  Install dependencies:
    npm install

2.  Run the development server:
    npm run dev

3.  Open http://localhost:3000 in your browser to see the result.
