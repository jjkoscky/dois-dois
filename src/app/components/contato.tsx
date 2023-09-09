import Link from "next/link";

export default function Contato() {
    return (
        <div>
           <h1>Contato</h1>
           <ul>
            <li>
                <span>E-mail</span>
                <div>
                    <a href='mailto:jjunior.koscky@gmail.com'>jjunior.koscky@gmail.com</a>
                </div>
                
            </li>
            <li>
                <span>Linkedin</span>
                <div>
                    <a href='#'>link do linkedin</a>
                </div>
            </li>
            <li>
                <span>Github</span>
                <div>
                    <a href='#'>link do Github</a>
                </div>
            </li>
            </ul>
        </div>
        
    )
  }