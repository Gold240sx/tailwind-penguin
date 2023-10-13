# Tailwind Penguin

## Tagline: 
A library of libraries, Tailwind Penguin is the place to store all your favorite code snippets, components, and projects and find new favorites from all the best libraries.

## Why was this developed:
If you ever wanted a singular place to find the exact component that you're looking for as well as store favorites, save info on your favorite projects ( computers folder location, gitnub repo, etc), and code snippets. This project seeks to serve that purpose and be your goto place for all your coding needs.

Addidional benefits include:
- Live Preview of components and component code
- Tailwind Focused.
- Quick access to copy and paste code snippets. (formatted for minimal effort). 
- Searchable by numerous parameters.
- Save your favorite code snippets.
- filter by libraries, component type, and more.
- Store info on the details and progress of your current projects (don't forget about them and finally finish them!)
- 100% free and open source.
- Animations -Icons - WebFonts - Regex - Classes - Images - packages

### Component Libraries: 
- Tailwind / Tailwind UI
- Flowbite  / Flowbite-React
- DaisyUI
- Hyper UI
- Tailspark
- Pines UI
- Tailwind Elements
- ShadCn
- NextUI
- React Select
- SweetAlert2

### Icon Libraries
- Font Awesome
- Hero Icons
- React Icons
- Google Icons
- Animated Icons
- Material Design Icons
- Lordicon
- Icon Scout
- Icon Finder

### Font Libraries
- Google Fonts
- CDN Fonts

## To get it running:
// in app/context/Libraries/index.tsx
remove all references to "premiumContent"
These items have been removed in order to comply with the terms of their usage.

```bash
    npm install
```

## Future Features:
- Searchbar
- Resizable Divs
- 3d content (3d models, 3d text, 3d backgrounds)

### Database custom code Snippet Upload 
- works for components that don't require npm library imports but trying to get it to work with npm library imports as well.
- security vulnerability concerns are an issue with this feature.

## Bugs:
- A function that removes the href attributes of all <a>/<Link> component within the componentViewer is removing the href of all component application wide. (this is a problem because the href is used to navigate to the component page)