import { createClient } from "@/utils/supabase/client";

export async function uploadServiceImage(file: File, sellerId: string): Promise<string> {
  const supabase = createClient();
  const ext = file.name.split(".").pop();
  const filePath = `${sellerId}/${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from("services-images")
    .upload(filePath, file, { cacheControl: "3600", upsert: false });

  if (error) throw error;

  return filePath; // store this in service_image_path, not the full URL
}

export function getServiceImageUrl(path: string): string {
  const supabase = createClient();
  const { data } = supabase.storage.from("services-images").getPublicUrl(path);
  return data.publicUrl;
}