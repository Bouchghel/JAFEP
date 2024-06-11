import React from 'react';

const historique = "Historique";
const title = "Jafep : Un Demi-Siècle d'Excellence et d'Innovation dans l'Industrie de la Peinture";
const desc = "Depuis 1965, Jafep s'impose sur le marché avec une vaste gamme de lignes et produits de peinture. Ses installations modernes couvrent plus de 40.000 mètres carrés, permettant la production annuelle de plus de 30.000 tonnes de peinture. L'entreprise se distingue par son engagement envers la qualité et l'environnement, certifié par les normes ISO 9001 et ISO 14001. Avec un réseau de plus de 600 distributeurs en Espagne, ainsi que des franchises et magasins propres, Jafep bénéficie d'une grande expérience en exportation et implantation de nouveaux marchés. Le groupe possède des filiales en Pologne, en Ukraine, en Argentine et au Maroc, et réalise un chiffre d'affaires supérieur à 25 millions d'euros. Ses employés et collaborateurs sont présents dans le monde entier, et l'entreprise est membre d'Asefapi et adhérente à Ecoembes et au point vert.";

const expertise = "Expertise";
const titleE = "La Philosophie de Jafep : Le Client au Cœur de Notre Engagement";
const descE = "La Philosophie de Jafep : Le Client au Cœur de Notre Engagement<br><br>" +
  "La valeur la plus importante de Peintures Jafep est, sans doute, le client. Nos clients sont notre raison d’être. Tous les efforts de l’entreprise sont dirigés afin d’obtenir la satisfaction maximale de nos clients. Pour cela, nous avons décidé de réaliser les objectifs suivants, qui constituent la philosophie de Jafep :<br><br>" +
  "– Fabriquer et développer des produits avec une excellente relation qualité-prix : Nous optimisons de façon permanente tous nos processus pour obtenir des produits de haute qualité avec des prix très compétitifs.<br><br>" +
  "– Innover continuellement par le biais de R&D : Nous appliquons une politique d’innovation et d’amélioration constante.<br><br>" +
  "– Offrir le meilleur service : L’attention au client à tout moment et la rapidité dans les livraisons sont présents continuellement.<br><br>" +
  "– Respecter l’environnement : Nous faisons tout notre possible pour fabriquer des produits respectueux de l’environnement et continuerons nos efforts dans ce sens.<br><br>" +
  "Nous travaillons également pour que nos fournisseurs les plus importants et nos collaborateurs prennent part à notre stratégie future.";
const year = "60+";
const expareance = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: '/src/assets/images/about/icon/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/src/assets/images/about/icon/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
  {
    imgUrl: '/src/assets/images/about/icon/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
  },
]

const Historique = () => {
  return (
    <div className='about-section style-3 padding-tb' id='about'>
      <div className='container'>

        {/* Historique */}
        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center border rounded p-4 shadow-sm mb-4">
          <div className="col">
            <div className="about-left">
              <div className="about-thumb">
                <img src="/historique/hommePaint.jpg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* 2nd col */}
          <div className="col">
            <div className="about-right">
              <div className="section-header">
                <span className="subtitle">{historique}</span>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center border rounded p-4 shadow-sm">
          {/* 1st col */}
          <div className="col">
            <div className="about-right">
              <div className="section-header">
                <span className="subtitle">{expertise}</span>
                <h2 className='title'>{titleE}</h2>
                <p dangerouslySetInnerHTML={{ __html: descE }}></p>
              </div>
            </div>
          </div>

          {/* 2nd col */}
          <div className="col">
            <div className="about-left">
              <div className="about-thumb">
                <img src="/historique/ex1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="abs-thumb">
                <img src="/historique/ex2.jpg" alt="" style={{ width: '300px', height: '300px' }} className="img-fluid" />
              </div>
              <div className="about-left-content">
                <h1>{year}</h1>
                <p>{expareance}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Historique
