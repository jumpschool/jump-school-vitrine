import TitreSection from '../Components/Admission/TitreSection'
import AdmissionForm from '../Components/Admission/AdmissionForm'
import AccepteSection from '../Components/Admission/AccepteSection'


export default function Admission() {
  return (
    <div className='admission-section'>
<TitreSection/>
<AdmissionForm/>
<AccepteSection/>
    </div>
  )
}

