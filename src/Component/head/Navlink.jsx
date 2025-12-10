// src/components/Navbar/NavLinks.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ isMobile = false, closeMobileMenu }) => {
  const [openIndex, setOpenIndex] = useState(null);          // for mobile top-level
  const [openSubIndex, setOpenSubIndex] = useState(null);    // for mobile inner items (B.Tech, MBA, etc.)

  const links = [
    {
      name: "about",
      submenu: true,
      sublink: [
        {
          Head: "about",
          sublink: [
            { name: "overview" },
            { name: "vision & mission" },
            { name: "governing body" },
          ],
        },
        {
          Head: "leadership",
          sublink: [
            { name: "Message from Chairman" },
            { name: "Message from Managing Director" },
            { name: "Message from Director" },
            { name: "Message from Dean Academics" },
          ],
        },
      ],
    },

    {
      name: "academics",
      submenu: true,
      sublink: [
        {
          Head: "Programs",
          sublink: [
            {
              name: "B.Tech",
              submenu: true,
              sublink: [
                { name: "Computer Science & Engineering" },
                { name: "Electronics & Communication Engineering" },
                { name: "Civil Engineering" },
                { name: "Mechanical Engineering" },
              ],
            },
            {
              name: "MBA",
              submenu: true,
              sublink: [
                { name: "Marketing Management" },
                { name: "Human Resource Management" },
                { name: "Financial Management" },
                { name: "Operations Management" },
                { name: "IT Management" },
              ],
            },
            {
              name: "Polytechnic",
              submenu: true,
              sublink: [
                { name: "Civil Engineering" },
                { name: "Mechanical Engineering" },
                { name: "Electrical Engineering" },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "admission",
      submenu: true,
      sublink: [
        {
          Head: "admission",
          sublink: [
            { name: "Admission Guidelines" },
            { name: "Fee Structure" },
            { name: "Admission Form Download" },
          ],
        },
        {
          Head: "Structure",
          sublink: [{ name: "Scholarship" }, { name: "Prospectus" }],
        },
      ],
    },

    {
      name: "administration",
      submenu: true,
      sublink: [
        {
          sublink: [
            { name: "Governing Body" },
            { name: "COE" },
            { name: "IQAC" },
            { name: "Academic Council" },
            { name: "Anti-Ragging Committee" },
          ],
        },
      ],
    },

    {
      name: "blog",
      submenu: true,
      sublink: [
        {
          sublink: [
            { name: "Future Engineering Innovations" },
            { name: "E-Mobility & Hybrid Vehicles" },
          ],
        },
      ],
    },

    {
      name: "life@cert",
      submenu: true,
      sublink: [
        {
          sublink: [
            { name: "Training & Placement" },
            { name: "Associated Recruiters" },
            { name: "Campus" },
            { name: "Hostel Facilities" },
            { name: "Alumni" },
            { name: "Events" },
          ],
        },
      ],
    },

    {
      name: "why cert",
      submenu: true,
      sublink: [
        {
          sublink: [
            { name: "COESD" },
            { name: "Teaching & Learning" },
            { name: "Real World Project" },
            { name: "Rural Empowerment" },
            { name: "Brain Stroming Seesion" },
          ],
        },
      ],
    },

    { name: "Career" },
    { name: "contact us" },
  ];

  // ------------------ DESKTOP (HOVER) VERSION ------------------
  if (!isMobile) {
    return (
      <>
        {links.map((link, index) => (
          <div key={index} className="flex group relative">
            <div className="px-3 text-left md:cursor-pointer flex items-center capitalize">
              <h1 className="py-3 my-6 uppercase">{link.name}</h1>

              {link.submenu && (
                <span className="flex text-lg items-center">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              )}
            </div>

            {/* Dropdown menu */}
            {link.submenu && (
              <div className="absolute top-20 hidden group-hover:block hover:block z-50">
                <div className="py-2 mt-3 relative">
                  <div className="w-4 h-4 left-3 absolute bg-[#114272] rotate-45"></div>
                </div>

                <div className="bg-[#114272] p-5 grid grid-cols-2 gap-5 rounded-lg shadow-lg">
                  {link.sublink?.map((mysublinks, i1) => (
                    <div key={i1}>
                      {mysublinks.Head && (
                        <h1 className="text-lg font-semibold text-white">
                          {mysublinks.Head}
                        </h1>
                      )}

                      {mysublinks.sublink?.map((slink, i2) => (
                        <div
                          key={i2}
                          className="relative group/sub hover:border-l-2 hover:border-white"
                        >
                          {!slink.submenu ? (
                            <li className="text-sm text-gray-300 my-2">
                              <Link
                                to={slink.name}
                                className="hover:text-white"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ) : (
                            <>
                              <p className="text-sm text-gray-300 my-2 cursor-pointer hover:text-white flex justify-between items-center pr-2">
                                {slink.name}
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                              </p>

                              <div className="absolute left-full top-0 hidden group-hover/sub:block bg-[#114272] p-4 rounded-lg shadow-lg w-64">
                                {slink.sublink?.map((sub3, k) => (
                                  <Link
                                    key={k}
                                    to={sub3.name}
                                    className="block text-gray-300 text-sm hover:text-white hover:border-l-2 hover:border-white py-1"
                                  >
                                    {sub3.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </>
    );
  }

  // ------------------ MOBILE (ACCORDION) VERSION ------------------
  const handleTopClick = (idx, hasSubmenu) => {
    if (!hasSubmenu) {
      // simple item like "Career", "contact us"
      if (closeMobileMenu) closeMobileMenu();
      return;
    }
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleInnerToggle = (key) => {
    setOpenSubIndex(openSubIndex === key ? null : key);
  };

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="w-full">
          <button
            type="button"
            className="w-full flex items-center justify-between pr-6"
            onClick={() => handleTopClick(index, !!link.submenu)}
          >
            <h1 className="py-3 my-1 uppercase text-left">{link.name}</h1>
            {link.submenu && (
              <span className="flex text-lg items-center">
                <ion-icon
                  name={openIndex === index ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
            )}
          </button>

          {/* Mobile dropdown content */}
          {link.submenu && openIndex === index && (
            <div className="pl-4 pb-2">
              {link.sublink?.map((mysublinks, i1) => (
                <div key={i1} className="mb-2">
                  {mysublinks.Head && (
                    <h1 className="text-base font-semibold text-white">
                      {mysublinks.Head}
                    </h1>
                  )}

                  {mysublinks.sublink?.map((slink, i2) => {
                    const innerKey = `${index}-${i1}-${i2}`;
                    const hasInner = slink.submenu && slink.sublink;

                    if (!hasInner) {
                      return (
                        <li key={i2} className="text-sm text-gray-300 my-1">
                          <Link
                            to={slink.name}
                            className="hover:text-white"
                            onClick={closeMobileMenu}
                          >
                            {slink.name}
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <div key={i2} className="my-1">
                        <button
                          type="button"
                          className="text-sm text-gray-300 flex items-center justify-between w-full pr-6"
                          onClick={() => handleInnerToggle(innerKey)}
                        >
                          <span>{slink.name}</span>
                          <ion-icon
                            name={
                              openSubIndex === innerKey
                                ? "chevron-up"
                                : "chevron-down"
                            }
                          ></ion-icon>
                        </button>

                        {openSubIndex === innerKey && (
                          <div className="pl-4 mt-1">
                            {slink.sublink?.map((sub3, k) => (
                              <Link
                                key={k}
                                to={sub3.name}
                                className="block text-gray-300 text-sm hover:text-white py-1"
                                onClick={closeMobileMenu}
                              >
                                {sub3.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;


// // src/components/Navbar/NavLinks.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavLinks = ({ isMobile = false, closeMobileMenu }) => {
//   const [openIndex, setOpenIndex] = useState(null);       // for mobile top-level
//   const [openSubIndex, setOpenSubIndex] = useState(null); // for mobile inner (B.Tech, MBA, etc.)

//   const links = [
//     {
//       name: "about",
//       submenu: true,
//       sublink: [
//         {
//           Head: "about",
//           sublink: [
//             { name: "overview" },
//             { name: "vision & mission" },
//             { name: "governing body" },
//           ],
//         },
//         {
//           Head: "leadership",
//           sublink: [
//             { name: "Message from Chairman" },
//             { name: "Message from Managing Director" },
//             { name: "Message from Director" },
//             { name: "Message from Dean Academics" },
//           ],
//         },
//       ],
//     },

//     {
//       name: "academics",
//       submenu: true,
//       sublink: [
//         {
//           Head: "Programs",
//           sublink: [
//             {
//               name: "B.Tech",
//               submenu: true,
//               sublink: [
//                 { name: "Computer Science & Engineering" },
//                 { name: "Electronics & Communication Engineering" },
//                 { name: "Civil Engineering" },
//                 { name: "Mechanical Engineering" },
//               ],
//             },
//             {
//               name: "MBA",
//               submenu: true,
//               sublink: [
//                 { name: "Marketing Management" },
//                 { name: "Human Resource Management" },
//                 { name: "Financial Management" },
//                 { name: "Operations Management" },
//                 { name: "IT Management" },
//               ],
//             },
//             {
//               name: "Polytechnic",
//               submenu: true,
//               sublink: [
//                 { name: "Civil Engineering" },
//                 { name: "Mechanical Engineering" },
//                 { name: "Electrical Engineering" },
//               ],
//             },
//           ],
//         },
//       ],
//     },

//     {
//       name: "admission",
//       submenu: true,
//       sublink: [
//         {
//           Head: "admission",
//           sublink: [
//             { name: "Admission Guidelines" },
//             { name: "Fee Structure" },
//             { name: "Admission Form Download" },
//           ],
//         },
//         {
//           Head: "Structure",
//           sublink: [{ name: "Scholarship" }, { name: "Prospectus" }],
//         },
//       ],
//     },

//     {
//       name: "administration",
//       submenu: true,
//       sublink: [
//         {
//           sublink: [
//             { name: "Governing Body" },
//             { name: "COE" },
//             { name: "IQAC" },
//             { name: "Academic Council" },
//             { name: "Anti-Ragging Committee" },
//           ],
//         },
//       ],
//     },

//     {
//       name: "blog",
//       submenu: true,
//       sublink: [
//         {
//           sublink: [
//             { name: "Future Engineering Innovations" },
//             { name: "E-Mobility & Hybrid Vehicles" },
//           ],
//         },
//       ],
//     },

//     {
//       name: "life@cert",
//       submenu: true,
//       sublink: [
//         {
//           sublink: [
//             { name: "Training & Placement" },
//             { name: "Associated Recruiters" },
//             { name: "Campus" },
//             { name: "Hostel Facilities" },
//             { name: "Alumni" },
//             { name: "Events" },
//           ],
//         },
//       ],
//     },

//     {
//       name: "why cert",
//       submenu: true,
//       sublink: [
//         {
//           sublink: [
//             { name: "COESD" },
//             { name: "Teaching & Learning" },
//             { name: "Real World Project" },
//             { name: "Rural Empowerment" },
//             { name: "Brain Stroming Seesion" },
//           ],
//         },
//       ],
//     },

//     { name: "Career" },
//     { name: "contact us" },
//   ];

//   /* ---------------- DESKTOP VERSION (unchanged CSS) ---------------- */
//   if (!isMobile) {
//     return (
//       <>
//         {links.map((link, index) => (
//           <div key={index} className="flex group">
//             <div className="px-3 text-left md:cursor-pointer flex items-center capitalize ">
//               <h1 className="py-3 my-6 uppercase">{link.name}</h1>

//               {link.submenu && (
//                 <span className="flex text-lg items-center">
//                   <ion-icon name="chevron-down"></ion-icon>
//                 </span>
//               )}
//             </div>

//             {/* Dropdown menu */}
//             {link.submenu && (
//               <div className="absolute top-20 hidden group-hover:block hover:block z-50">
//                 <div className="py-2 mt-3 relative">
//                   <div className="w-4 h-4 left-3 absolute bg-[#114272] rotate-45"></div>
//                 </div>

//                 <div className="bg-[#114272] p-5 grid grid-cols-2 gap-5 rounded-lg shadow-lg">
//                   {link.sublink?.map((mysublinks, i1) => (
//                     <div key={i1}>
//                       {mysublinks.Head && (
//                         <h1 className="text-lg font-semibold text-white ">
//                           {mysublinks.Head}
//                         </h1>
//                       )}

//                       {mysublinks.sublink?.map((slink, i2) => (
//                         <div
//                           key={i2}
//                           className="relative group/sub hover:border-l-2 hover:border-white"
//                         >
//                           {!slink.submenu ? (
//                             <li className="text-sm text-gray-300 my-2 ">
//                               <Link
//                                 to={slink.name}
//                                 className="hover:text-white"
//                               >
//                                 {slink.name}
//                               </Link>
//                             </li>
//                           ) : (
//                             <>
//                               <p className="text-sm text-gray-300 my-2 cursor-pointer hover:text-white">
//                                 {slink.name}
//                               </p>

//                               <div className="absolute left-full top-0 hidden group-hover/sub:block bg-[#114272] p-4 rounded-lg shadow-lg w-64">
//                                 {slink.sublink?.map((sub3, k) => (
//                                   <Link
//                                     key={k}
//                                     to={sub3.name}
//                                     className="block text-gray-300 text-sm hover:text-white hover:border-l-2 hover:border-white py-1"
//                                   >
//                                     {sub3.name}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </>
//     );
//   }

//   /* ---------------- MOBILE VERSION (same as previous answer) ---------------- */
//   const handleTopClick = (idx, hasSubmenu) => {
//     if (!hasSubmenu) {
//       if (closeMobileMenu) closeMobileMenu();
//       return;
//     }
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   const handleInnerToggle = (key) => {
//     setOpenSubIndex(openSubIndex === key ? null : key);
//   };

//   return (
//     <>
//       {links.map((link, index) => (
//         <div key={index} className="w-full">
//           <button
//             type="button"
//             className="w-full flex items-center justify-between pr-6"
//             onClick={() => handleTopClick(index, !!link.submenu)}
//           >
//             <h1 className="py-3 my-1 uppercase text-left">{link.name}</h1>
//             {link.submenu && (
//               <span className="flex text-lg items-center">
//                 <ion-icon
//                   name={openIndex === index ? "chevron-up" : "chevron-down"}
//                 ></ion-icon>
//               </span>
//             )}
//           </button>

//           {link.submenu && openIndex === index && (
//             <div className="pl-4 pb-2">
//               {link.sublink?.map((mysublinks, i1) => (
//                 <div key={i1} className="mb-2">
//                   {mysublinks.Head && (
//                     <h1 className="text-base font-semibold text-white">
//                       {mysublinks.Head}
//                     </h1>
//                   )}

//                   {mysublinks.sublink?.map((slink, i2) => {
//                     const innerKey = `${index}-${i1}-${i2}`;
//                     const hasInner = slink.submenu && slink.sublink;

//                     if (!hasInner) {
//                       return (
//                         <li key={i2} className="text-sm text-gray-300 my-1">
//                           <Link
//                             to={slink.name}
//                             className="hover:text-white"
//                             onClick={closeMobileMenu}
//                           >
//                             {slink.name}
//                           </Link>
//                         </li>
//                       );
//                     }

//                     return (
//                       <div key={i2} className="my-1">
//                         <button
//                           type="button"
//                           className="text-sm text-gray-300 flex items-center justify-between w-full pr-6"
//                           onClick={() => handleInnerToggle(innerKey)}
//                         >
//                           <span>{slink.name}</span>
//                           <ion-icon
//                             name={
//                               openSubIndex === innerKey
//                                 ? "chevron-up"
//                                 : "chevron-down"
//                             }
//                           ></ion-icon>
//                         </button>

//                         {openSubIndex === innerKey && (
//                           <div className="pl-4 mt-1">
//                             {slink.sublink?.map((sub3, k) => (
//                               <Link
//                                 key={k}
//                                 to={sub3.name}
//                                 className="block text-gray-300 text-sm hover:text-white py-1"
//                                 onClick={closeMobileMenu}
//                               >
//                                 {sub3.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default NavLinks;
