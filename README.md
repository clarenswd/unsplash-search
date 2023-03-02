# SnapSearch

Unsplash client side search. This is a simple client side search for the Unsplash API. It uses the Unsplash API to search for images and display them in a grid.

# Main Dependencies

- Material UI
- Recoil - for state management.
- Blurhash - to render Blured images
- React

# Things I would have done differently

- Add more unit test, I added some for the Unsplash service file, `src/services/useUnsplash.test.tsx`.
- Add a recommendation section for the keywords and populate them using openAI. I tried this approach, just to add a woW effect, but those requests add a lot of time to the search.
- Refactor the image grid, make transitions smoother and perhaps a nicer styling.
- Add error handling for the API calls and what not.
