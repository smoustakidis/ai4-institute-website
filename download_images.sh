#!/bin/bash
cd "C:\Users\smous\Desktop\AI4 Website\public\images"

# Download remaining images
curl -o "data-analytics.jpg" "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80"
curl -o "ai-solutions.jpg" "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80"
curl -o "digital-transformation.jpg" "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
curl -o "experimental-research.jpg" "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
curl -o "ai-products.jpg" "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
curl -o "scalable-architecture.jpg" "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80"
curl -o "continuous-innovation.jpg" "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
curl -o "healthcare-ai.jpg" "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80"
curl -o "stroke-research.jpg" "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
curl -o "european-collaboration.jpg" "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80"

echo "All images downloaded successfully!"