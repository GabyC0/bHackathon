import React from 'react';
import * as Survey from "survey-react";

const Review = () => {

	Survey.StylesManager.applyTheme("modern");

	const json = {
        "title": "Hospital Care Review",
        "showProgressBar": "top",
        "pages": [
          {
            "questions": [
              {
                type: "matrix",
                name: "Quality",
                title:
                  "Please answer the following questions about your experience at the hospital",
                columns: [
                  {
                    value: 1,
                    text: "Yes",
                  },
                  {
                    value: 2,
                    text: "No",
                  },
                  {
                    value: 3,
                    text: "Not Sure",
                  },
                ],
                rows: [
                  {
                    value: "black_care_providers",
                    text: "Were black care providers available at the hospital?",
                  },
                  {
                    value: "midwives_on_staff",
                    text: "Did the hospital offer certified nurse midwives on staff?",
                  },
                  {
                    value: "baby_friendly",
                    text: "Is this hospital baby-friendly? (e.g., did they offer lactation support?)",
                  },
                ],
              },
              {
                type: "matrix",
                name: "Quality",
                title:
                  "Please answer the following: ",
                columns: [
                  {
                    value: 1,
                    text: "Yes",
                  },
                  {
                    value: 2,
                    text: "No",
                  },
                ],
                rows: [
                  {
                    "value": "birth_plan",
                    "text": "Did you have a birth plan?"
                  },
                  {
                    "value": "own_midwife",
                    "text": "Did you bring your own midwife?"
                  },
                  {
                    "value": "own_doula",
                    "text": "Did you bring your own doula?"
                  },
                  {
                    "value": "pain_meds",
                    "text": "Were medications for pain relief made available to you?"
                  },
                  {
                    "value": "pain_manage",
                    "text": "In your opinion, did the Nurse &Doctors take your pain complaints seriously?"
                  }
                ],
              },
              {
                "type": "rating",
                "name": "satisfaction",
                "title": "How was your experience with your Doctor?",
                "isRequired": true,
                "mininumRateDescription": "Not satisfied",
                "maximumRateDescription": "Completely satisfied"
              },
              {
                "type": "comment",
                "name": "recommend friends",
                "visibleIf": "{satisfaction} =< 2",
                "title": "Tell us why you weren't satisfied with your Doctor?"
              },
              {
                "type": "rating",
                "name": "satisfaction2",
                "title": "How was your experience with your Nurses?",
                "isRequired": true,
                "mininumRateDescription": "Not satisfied",
                "maximumRateDescription": "Completely satisfied"
              },
              {
                "type": "comment",
                "name": "recommend friends",
                "visibleIf": "{satisfaction2} =< 2",
                "title": "Tell us why you weren't satisfied with your Nurses?"
              },
              {
                "type": "rating",
                "name": "satisfaction3",
                "title": "How was your experience with your Attending Staff?",
                "isRequired": true,
                "mininumRateDescription": "Not satisfied",
                "maximumRateDescription": "Completely satisfied"
              },
              {
                "type": "comment",
                "name": "recommend friends",
                "visibleIf": "{satisfaction3} =< 2",
                "title": "Tell us why you weren't satisfied with your Attending Staff?"
              },
              {
                "type": "comment",
                "name": "additional_information",
                "title": "What could have made your overall experience better?"
              }
            ]
          },
          
          
        ]
       };
 
const survey = new Survey.Model(json);


return (
	<div className = "rev">
	<Survey.Survey
                model={survey}
            />
	</div>
);
};

export default Review;
