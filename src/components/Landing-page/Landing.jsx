import React, { Fragment,useState } from "react"; 
import Header from "../Header";
import Footer from "../Footer"
import {Helmet} from "react-helmet"
import { useParams } from "react-router-dom";

const Landing = () =>{
  const { city } = useParams();
  console.log(city)

  const [openAccordion, setOpenAccordion] = useState(null);
const toggleAccordion = (index) => {
  setOpenAccordion(openAccordion == index ? null : index);
};

const [scroll, setScroll] = useState(0);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
})

const stringWithHyphens = city;
const stringWithSpaces = stringWithHyphens.replace(/-/g, ' ');


const handleScroll = () => setScroll(document.documentElement.scrollTop);

  const stringWithHyphenss = city;
  const parts = stringWithHyphenss.split("-");
  const lastString = parts[parts.length - 1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  console.log(city)

return(

  <Fragment>
<div className={className} style={{ background: "#ca9c6a" }}>
  <Helmet>
              <meta charSet="utf-8" />
                <title>Telzon Marketing In {lastString}</title>
                <meta name="description" content="Helmet application" />
  </Helmet>

</div>

  </Fragment>
)


}


export default Landing

