# Siddartha Manubothu - Sports Portfolio Website

This is a professional sports portfolio website for Siddartha Manubothu, showcasing his work in broadcast journalism, photography, videography, graphic design, and event coverage.

## Adding Your Images to the Project

To add your sports and events images to the project, follow these steps:

### Sports Images

1. Navigate to the `public/images/sports` directory in the project
2. Copy your sports images from `C:\Users\karra\OneDrive\Desktop\sports` to this directory
3. Rename the images to match the naming convention used in the components:
   - `sport1.jpg`
   - `sport2.jpg`
   - `sport3.jpg`
   - etc. (up to `sport12.jpg`)

### Events Images

1. Navigate to the `public/images/events` directory in the project
2. Copy your events images from `C:\Users\karra\OneDrive\Desktop\events` to this directory
3. Rename the images to match the naming convention used in the components:
   - `event1.jpg`
   - `event2.jpg`
   - `event3.jpg`
   - etc. (up to `event6.jpg`)

## Running the Project

To run the project locally:

1. Open a terminal in the project directory
2. Run `npm install` to install dependencies (if you haven't already)
3. Run `npm run dev` to start the development server
4. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173 or similar)

## Project Structure

- `src/components/`: Contains all the React components for the different sections
  - `BroadcastSection.jsx`: On-Air/Broadcast Journalism section
  - `PhotographySection.jsx`: Photography section
  - `VideographySection.jsx`: Videography section
  - `GraphicDesignSection.jsx`: Graphic Design section
  - `EventsSection.jsx`: Events section
  - `ContactSection.jsx`: Contact section
  - `Header.jsx`: Website header
  - `Navigation.jsx`: Navigation menu
  - `Footer.jsx`: Website footer
  - `SectionDivider.jsx`: Visual dividers between sections

- `public/images/`: Contains all the images used in the project
  - `sports/`: Sports images
  - `events/`: Events images

## Customizing the Content

You can customize the content of each section by editing the corresponding component files. Each component contains arrays of data that you can modify to update the information displayed on the website.
