import React from "react";
import { Helmet } from "react-helmet-async";
import { TRANSLATION } from "translation/translation";
import {
  ReusableProgramPage
} from "components/shared/ReusableProgramPage"; 

import img1 from "assets/images/w1.png";
import img2 from "assets/images/w2.png";
import img3 from "assets/images/w3.png";
import img4 from "assets/images/w4.png";
import img5 from "assets/images/w5.png";
import img6 from "assets/images/w6.png";
import img7 from "assets/images/w7.png";

const MasterDegreePage = () => {
  const lang = localStorage.getItem("lang") || "en";

  const sections = [
    {
      title: TRANSLATION.master_value_title[lang],
      text: TRANSLATION.master_value_text[lang],
      img: img1,
    },
    {
      title: TRANSLATION.master_facts_title[lang],
      list: TRANSLATION.master_facts_list[lang],
      img: img2,
      reverse: true,
    },
    {
      title: TRANSLATION.master_types_title[lang],
      list: TRANSLATION.master_types_list[lang],
      img: img3,
    },
    {
      title: TRANSLATION.master_choose_title[lang],
      text: TRANSLATION.master_choose_text[lang],
      img: img4,
      reverse: true,
    },
    {
      title: TRANSLATION.master_cost_title[lang],
      text: (
        <ul>
          {TRANSLATION.master_cost_list[lang].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ),
      img: img5,
    },
    {
      title: TRANSLATION.master_apply_title[lang],
      list: TRANSLATION.master_apply_list[lang],
      img: img7,
      reverse: true,
    },
    {
      title: TRANSLATION.master_requirements_title[lang],
      text: (
        <ul>
          {TRANSLATION.master_requirements_list[lang].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ),
      img: img6,
    },
  ];

  return (
    <>
      <Helmet>
        <title>{TRANSLATION.master_title[lang]}</title>
      </Helmet>
      <ReusableProgramPage
        pageTitle={TRANSLATION.master_title[lang]}
        heroTitle={TRANSLATION.master_title[lang]}
        heroSubtitle={TRANSLATION.master_intro[lang]}
        sections={sections}
        supportTitle={TRANSLATION.master_support_title[lang]}
        supportText={TRANSLATION.master_support_text[lang]}
      />
    </>
  );
};

export default MasterDegreePage;
