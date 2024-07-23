import Nom from "./AdmissionField/Nom"
import Prénom from "./AdmissionField/Prénom"
import Email from "./AdmissionField/Email"
import Région from "./AdmissionField/Région"
import Téléphone from "./AdmissionField/Téléphone"
import Formation from "./AdmissionField/Formation"
import CommentConnus from "./AdmissionField/CommentConnus"

export default function AdmissionForm() {
  return (
    <div className="px-48 pb-10">
      <div className="flex">
      <Nom/>
      <Prénom/>
      </div>
      <div className="flex">
      <Région/>
      <Téléphone/>
      </div>

      <Email/>
      <Formation/>
      <CommentConnus/>

    </div>
  )
}

