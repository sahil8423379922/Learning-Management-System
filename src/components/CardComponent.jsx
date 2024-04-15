import React from "react";
const CardComponent = ({ data }) => (
  <div className="row">
    {data.map((item, index) => (
      <div className="col">
        <div className="card" key={index}>
          <div className="card-body">
            <div className="card-text">
              <div className="fs-4">{index}</div>
              <div className="fw-bold" style={{ fontSize: "15px" }}>
                {item.title}
              </div>
              <div className="pt-3">{item.description}</div>
              <div class="d-grid gap-2 mt-4">
                <a
                  href={`/video/${item.title}`}
                  class="btn btn-outline-dark"
                  type="button"
                >
                  Play Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CardComponent;

// export default function CardComponent({ data }) {
//   return (
//     <div>
//       <div class={styles.size}>
//         <div className="row">
//           <div className="col">
//             {data.map((item, index) => {
//               <p>Checking</p>

//             })}
//           </div>
//         </div>
//       </div>
//       ;
//     </div>
//   );
// }
