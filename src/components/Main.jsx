import useFetchMenuDetails from "../hooks/useMenuItems";

export function Main() {
  const { menuDetails, loading } = useFetchMenuDetails();
  console.log(menuDetails, 'data');

  return (
    loading ? (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <div className="container">
        <input 
          style={{ margin: '1rem' }} 
          type="text" 
          className="form-control" 
          id="formGroupExampleInput" 
          placeholder="Search Menu items" 
        />
        <div className="row justify-content-start">
          {menuDetails.sections.map((section) => (
            <div style={{ flex: '0 0 0' }} className="col" key={section.id}>
              {section.images.map((image) => (
                <img
                  key={image.id}
                  src={image.image}
                  className="rounded-circle"
                  alt={section.name}
                  style={{ width: "80px", height: "80px", margin: '1rem' }}
                />
              ))}
              <p style={{ paddingLeft: '1.5rem' }} className="lead">{section.name}</p>
            </div>
          ))}
          {console.log(menuDetails.sections,'sections')}
        </div>
        {menuDetails.sections.map((section) => (
          <div key={section.id} className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  {section.items.map((item) => (
                    <div key={item.id} className="w-auto p-3" style={{ maxWidth: "540px" }}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          {item.images && item.images.map((image) => (
                            <img key={image.id} src={image.image} className="img-fluid rounded-start" alt={item.name} />
                          ))}
                        </div>
                        <div className="col-md-8">
                          <div className="card-body" style={{padding: '0', paddingLeft: '1rem'}}>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">
                              {item.description && item.description.length > 50 ? item.description.slice(0, 50) + '...' : item.description}
                            </p>                            
                            <p className="h6">
                              R${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}
