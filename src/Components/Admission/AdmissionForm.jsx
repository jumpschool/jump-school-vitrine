import Nom from "./AdmissionField/Nom"
import Prénom from "./AdmissionField/Prénom"
import Email from "./AdmissionField/Email"
import Région from "./AdmissionField/Région"
import Téléphone from "./AdmissionField/Téléphone"
import SourceInfo from "./AdmissionField/SourceInfo"
import CommentConnus from "./AdmissionField/CommentConnus"
import CurrentStatus from "./AdmissionField/CurrentStatus"

export default function AdmissionForm() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Nom />
        <Prénom />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Région />
        <Téléphone />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Email />
        <SourceInfo />
        <CommentConnus />
        <CurrentStatus /> 
      </div>
    </div>
  );
}
