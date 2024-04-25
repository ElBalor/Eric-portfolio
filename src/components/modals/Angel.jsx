import React from "react";

const Angel = () => {
    return(
        <dialog id="angel" className="modal w-full bg-accent/40">
        <div className="modal-box p-9 m-auto items-center justify-center">
            <form method="dialog">
              <button className=" absolute border border-accent/60 rounded-full hover:bg-accent/35 right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-3xl text-center mb-3">
            Arch Angel
            </h3>
            <p className='font-light text-xs sm:text-sm md:text-base'>
           My journey in web development is powered by an array of mystical
              tools and languages, with JavaScript casting the core of my
              enchantments. I wield frameworks like React.js and Next.js with
              precision, crafting seamless portals (websites) that connect realms
              (users) across the digital universe. The ancient arts of the
              Jamstack empower me to create fast, secure, and dynamic experiences,
              while my design skills ensure every creation is not only functional
              but visually captivating. Join me as I continue to explore new
              spells and technologies to shape the future of the web.
        </p>
        </div>
        </dialog>
    )
}

export default Angel