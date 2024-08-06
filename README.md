# DevPage

## Overview
DevPage is a professional website project showcasing information about Lucas Silvestre, including his services, selected projects, and personal details. This project was developed to demonstrate skills in web development using modern technologies.

## Features
- **Animated Welcome Screen:** A welcome screen that disappears after the animation completes.
- **Smooth Page Transitions:** Animated page transitions using `Framer Motion`.
- **Loading Skeletons:** Displays loading skeletons while data is being fetched.
- **Scroll Opacity Effect:** The profile picture changes opacity as the page scrolls.
- **Animated Services:** Services are listed with animations based on visibility in the viewport.
- **Selected Projects:** Links to selected projects with hover animations.

## Technologies Used
- **React:** JavaScript library for building user interfaces.
- **Next.js:** React framework for server-side rendering and static site generation.
- **Bootstrap:** CSS framework for responsive design.
- **React Bootstrap:** Integration of Bootstrap with React.
- **React Loading Skeleton:** Library for displaying loading skeletons.
- **Framer Motion:** Library for animations in React.
- **React Intersection Observer:** Hook for detecting when a component is in the viewport.
- **Custom Components:** `AnimatedCircle`, `ScrollToTopCircle`, and `WelcomeScreen`.

## Project Structure
├── components
│ ├── AnimatedCircle.js
│ ├── ScrollToTopCircle.js
│ └── WelcomeScreen.js
├── pages
│ ├── index.js
│ ├── projects
│ └── about
├── public
│ ├── images
│ │ ├── lucasSemFundo.jpg
│ │ ├── marketplacecard.jpg
│ │ └── kanban2.jpg
├── styles
│ ├── Home.module.css
├── package.json
└── README.md

## How to Run the Project
To run the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/devpage.git
    ```
2. **Install the dependencies:**
    ```sh
    cd devpage
    npm install
    ```
3. **Run the development server:**
    ```sh
    npm run dev
    ```
4. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Contribution
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## Contact
For more information, contact:
- **Email:** lucas.silvestre@example.com
- **LinkedIn:** [linkedin.com/in/lucas-silvestre](https://linkedin.com/in/lucas-silvestre)
