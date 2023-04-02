import { Photo } from "@/types";
import lqip from "lqip-modern";
import { createApi } from "unsplash-js";

async function getDataUrl(url: string) {
    const imgData = await fetch(url)

    const arrayBufferData = await imgData.arrayBuffer()
    const lqipData = await lqip(Buffer.from(arrayBufferData))

    return lqipData.metadata.dataURIBase64
}

export async function getPhotos(clientInstance: ReturnType<typeof createApi>, query: string): Promise<Photo[]> {

    const photosResults: Photo[] = []

    const responseApi = await clientInstance.search.getPhotos({
        query
    })

    if (responseApi.type != 'success') return photosResults

    const { results } = responseApi.response

    const mappedPhotos = results.map((photo, index) => ({
        src: photo.urls.full,
        thumb: photo.urls.thumb,
        width: photo.width,
        height: photo.height,
        alt: photo.alt_description ?? `italy-img-${index}`,
        likes: photo.likes ?? 0,
    }))

    const photosArrWithDataUrl: Photo[] = [];

    for (const photo of mappedPhotos) {
        const blurDataURL = await getDataUrl(photo.src)
        photosArrWithDataUrl.push({ ...photo, blurDataURL })
    }

    photosResults.push(...photosArrWithDataUrl)

    return photosResults
}

export async function getUserPhotos(clientInstance: ReturnType<typeof createApi>, username: string): Promise<Photo[]> {

    const photosResults: Photo[] = []

    const responseApi = await clientInstance.users.getPhotos({
        username
    })

    if (responseApi.type != 'success') return photosResults

    const { results } = responseApi.response

    const mappedPhotos = results.map((photo, index) => ({
        src: photo.urls.full,
        thumb: photo.urls.thumb,
        width: photo.width,
        height: photo.height,
        alt: photo.alt_description ?? `italy-img-${index}`,
        likes: photo.likes ?? 0,
    }))

    const photosArrWithDataUrl: Photo[] = [];

    for (const photo of mappedPhotos) {
        const blurDataURL = await getDataUrl(photo.src)
        photosArrWithDataUrl.push({ ...photo, blurDataURL })
    }

    photosResults.push(...photosArrWithDataUrl)

    return photosResults
}