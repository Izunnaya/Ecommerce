import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "1qk9tru6",
  dataset: "production",
  apiVersion: "2024-12-31",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

//Key Takeaways from this file
//=====================

// This file sets up a connection to Sanity project and provides tools (client and urlFor) for interacting with the Sanity dataset and handling images.

// The projectId, dataset, and apiVersion ensure you're connecting to the correct backend and dataset.

// The token provides secure access to private data without hardcoding it in your app.

// The urlFor function simplifies generating image URLs, a common task when working with Sanity.
