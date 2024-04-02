import Modal from "@/app/components/Modal";
import PhotoDetails from "@/app/components/PhotoDetails";

export default function PhotoModal({ params: { id, lang } }) {
    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    )
}
