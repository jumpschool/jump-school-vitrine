  
import './button.css'; 
export default function Button() {
  return (
    <div className="px-48 pt-4 pb-6 button-bg">
      <button className="bg-customPink rounded-md px-5 py-1 font-Oswald text-white text-lg hover:bg-white hover:text-customPink hover:border-2 hover:border-customPink transition duration-300">
        Envoyer 
      </button>
    </div>
  );
}

