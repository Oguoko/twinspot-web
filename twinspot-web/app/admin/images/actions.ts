"use server";

/**
 * Admin image upload intentionally disabled.
 * This file exists only to satisfy routing.
 */

export async function uploadImage() {
  throw new Error("Image upload is disabled.");
}
