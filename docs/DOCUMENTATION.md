# Arkansas Voting Improvement Components

This document provides an overview of the components created for the Arkansas Voting Improvement interface.

## Project Structure

The project has the following structure:

- `ArkansasVotingApp.jsx` - Main application component that integrates all UI elements
- `CardComponents.jsx` - Collection of reusable card components for displaying various types of information
- `Box.jsx` - Entry point component that renders the main application
- `custom.css` - Custom styles and animations for the application

## Card Components

The project includes 12 different card components, each designed for specific use cases:

1. **BasicInfoCard** - Simple card with an icon and left border accent
2. **CTACard** - Call-to-action card with a prominent button
3. **StatCard** - For displaying statistics with a colored accent and icon
4. **FeatureCard** - Card with a top border accent for highlighting features
5. **ResourceCard** - Card with an icon and external link
6. **IssueSolutionCard** - Presents both a challenge and its solution
7. **TimelineCard** - Displays important dates with status indicators
8. **FAQCard** - Expandable card for frequently asked questions
9. **TestimonialCard** - For displaying quotes and testimonials
10. **TeamMemberCard** - For showcasing team members
11. **ProgressCard** - Card with a progress bar
12. **CountyInfoCard** - Displays county-specific voting information

## Main Application Sections

The application is divided into four main sections:

1. **Home** - Landing page with key information and call-to-action cards
2. **Resources** - Information resources, FAQs, and links to official sites
3. **Contact** - Contact form and county information
4. **About** - Information about the initiative, team, and impact

## Using the Components

### Example: Basic Info Card

```jsx
<BasicInfoCard 
  title="Voter Registration" 
  description="Register to vote at least 30 days before an election." 
  icon={<FileText size={24} />}
  borderColor="border-blue-500"
/>
```

### Example: Call to Action Card

```jsx
<CTACard 
  title="Register to Vote" 
  description="Check your registration status or register to vote in Arkansas." 
  buttonText="Register Now" 
  icon={<CheckCircle />}
  primary={true}
/>
```

### Example: Issue/Solution Card

```jsx
<IssueSolutionCard 
  title="Voter ID Requirements" 
  challenge="Arkansas has strict photo ID requirements that can create barriers for certain voters."
  solution="We're working to ensure all eligible voters can easily obtain acceptable ID and promoting awareness of the provisional ballot option for those without ID."
/>
```

## Customization

Each component accepts various props for customization:

- Colors can be customized using Tailwind CSS color classes
- Icons can be changed using Lucide React icons
- Content is fully customizable through component props

## Animations

The interface includes several animations:

- Fade-in animation for section transitions
- Slide-down animation for mobile menu
- Hover effects on cards and buttons
- Transform animations for call-to-action cards

These animations are defined in the `custom.css` file and applied to components using the appropriate CSS classes.

## Responsive Design

The interface is fully responsive and adapts to different screen sizes:

- Desktop: Full multi-column layout
- Tablet: Reduced columns and adjusted spacing
- Mobile: Single column layout with mobile navigation menu

## Integration

To integrate these components into another project:

1. Copy the `CardComponents.jsx` file to your project
2. Import the desired components
3. Add the custom CSS classes if needed
4. Use the components in your application

For complete integration, include the `ArkansasVotingApp.jsx` component, which provides a fully-functional application with navigation and all sections.

---

This documentation is intended to help developers understand and use the Arkansas Voting Improvement components effectively. 