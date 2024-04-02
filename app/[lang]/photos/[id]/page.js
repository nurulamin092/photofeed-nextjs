import PhotoDetails from "@/app/components/PhotoDetails";


export default function PhotoDetailsPage({ params: { id, lang } }) {
    return (
        <PhotoDetails id={id} lang={lang} />
    )
}
