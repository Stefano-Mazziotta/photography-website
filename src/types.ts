export type Photo = {
    src: string;
    thumb: string;
    width: number;
    height: number;
    alt: string;
    blurDataURL: string;
    likes: number;
};

export type HomeProps = {
    italy: Photo[];
    argentina: Photo[];
    steffanalog: Photo[];
}