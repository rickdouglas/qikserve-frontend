import useFetchMenuDetails from "../hooks/useMenuItems";
import '../styles/Main.scss';
import { useState } from 'react';
import { Card } from "./Card";
import { Modal } from "./Modal";
import { Cart } from "./Cart";
import { Spinner } from "./Spinner";
import { SearchBar } from "./SearchBar";

export function Main() {
  const { menuDetails, loading } = useFetchMenuDetails();
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modifiers, setModifiers] = useState({});

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const renderModal = (item) => {
    document.body.style.overflow = 'hidden';
    setSelectedItem(item);
    if(item.modifiers) setModifiers(item.modifiers);
    setIsModalOpen(true);
    console.log(modifiers, 'item');
  }

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsModalOpen(false);
    setSelectedItem(null);
  }

  return (
    loading ? (
      <Spinner />
    ) : (
      <div className="container">
        <SearchBar />
        <div className="row g-2 d-flex">
          <div className="col-8" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', padding: '0.5rem'}}>
            <div className="row justify-content-start">
              {menuDetails.sections.map((section) => (
                <div style={{ flex: '0 0 0' }} className="col" key={section.id}>
                  {section.images.map((image) => (
                    <button className="btn" key={image.id}>
                      <img
                        src={image.image}
                        className="rounded-circle"
                        alt={section.name}
                        style={{ width: "80px", height: "80px", objectFit: "cover"}}
                      />
                    </button>
                  ))}
                  <p style={{ paddingLeft: '1rem' }} className="h5">{section.name}</p>
                </div>
              ))}
            </div>
            <div className="row-g-0 d-flex">
              <div className="col-8">
                {menuDetails.sections.map((section, index) => {
                  const isOpen = openAccordion === section.id;
                  return (
                    <div key={section.id} className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button
                            className={`accordion-button ${isOpen ? 'h2' : 'collapsed'}`}
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
                            {section.items && section.items.map((item) => (
                              <Card
                                onclick={() => renderModal(item)}
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
          </div>
          <div className="col-4">
            <Cart />
          </div>
        </div>

        {isModalOpen && selectedItem && (
          <Modal
            item={selectedItem}
            closeModal={closeModal}
          />
        )}
      </div>
    )
  );
}
