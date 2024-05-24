import useFetchMenuDetails from "../hooks/useMenuItems";
import '../styles/Main.scss';
import { useState } from 'react';
import { Card } from "./Card";

export function Main() {
  const { menuDetails, loading } = useFetchMenuDetails();
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    loading ? (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <div className="container">
        <input 
          type="text" 
          className="form-control" 
          id="formGroupExampleInput" 
          placeholder="Search Menu items" 
        />
        <div className="row justify-content-start">
          {menuDetails.sections.map((section) => (
            <div style={{ flex: '0 0 0' }} className="col" key={section.id}>
              {section.images.map((image) => (
                <button className="btn" key={image.id}>
                  <img
                    src={image.image}
                    className="rounded-circle"
                    alt={section.name}
                    style={{ width: "80px", height: "80px" }}
                  />
                </button>
              ))}
              <p style={{ paddingLeft: '1rem' }} className="h5">{section.name}</p>
            </div>
          ))}
          {console.log(menuDetails.sections, 'sections')}
        </div>
        <div className="col-8">
        {menuDetails.sections.map((section, index) => {
          const isOpen = openAccordion === section.id;
          return (
            <div key={section.id} className="accordion accordion-flush" id="accordionFlushExample">
              <div  className="accordion-item">
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button 
                    className={`accordion-button ${isOpen ? '' : 'collapsed'}`} 
                    type="button" 
                    onClick={() => toggleAccordion(section.id)} 
                    aria-expanded={isOpen} 
                    aria-controls={`collapse${index}`}
                  >
                    {section.name}
                  </button>
                </h2>
                <div 
                  id={`collapse${index}`} 
                  className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} 
                  aria-labelledby={`heading${index}`} 
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    {section.items.map((item) => (
                      <Card 
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        images={item.images && item.images.map((image) => image.image)} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    )
  );
}
