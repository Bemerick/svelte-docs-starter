// TreeData.js
export const treeData = {
    "name": "Rules for Visualization",
    "children": [
      {
        "name": "Furlough on one or more consecutive or continuous days (see Note 7)",
        "children": [
          {
            "name": "Is during a reduction in force notice period",
            "children": [
              {
                "name": 472,
                "natureOfAction": "Furlough NTE (Date)\r\n\r\n\r\n",
                "authorityCode": "L9K",
                "authority": "Reg. 351.806",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)\r\n\r\n\r\n"
              }
            ]
          },
          {
            "name": "The furlough is more than 30 calendar days, is not covered under Rule 1, and is effected under 5 CFR part 351",
            "children": [
              {
                "name": 472,
                "natureOfAction": "Furlough NTE (Date)\r\n\r\n\r\n",
                "authorityCode": "PNM",
                "authority": "Reg. 351.603",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)\r\n\r\n\r\n"
              }
            ]
          },
          {
            "name": "The furlough is for 30 calendar days or less based on decision of an administrative officer and is effected under 5 U.S.C. chapter 75",
            "children": [
              {
                "name": 472,
                "natureOfAction": "Furlough NTE (Date)\r\n\r\n\r\n",
                "authorityCode": "VAJ",
                "authority": "5 U.S.C. 75",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)\r\n\r\n\r\n"
              }
            ]
          },
          {
            "name": "Employee is a Senior Executive Service appointee",
            "children": [
              {
                "name": 472,
                "natureOfAction": "Furlough NTE (Date)\r\n\r\n\r\n",
                "authorityCode": "VDR",
                "authority": "5 U.S.C. 3595a",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)\r\n\r\n\r\n"
              }
            ]
          },
          {
            "name": "The furlough is for 30 calendar days or less and is not effected under 5 U.S.C. chapter 75",
            "children": [
              {
                "name": 472,
                "natureOfAction": "Furlough NTE (Date)\r\n\r\n\r\n",
                "authorityCode": "USM",
                "authority": "(Cite agency authority for furlough)",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)\r\n\r\n\r\n"
              }
            ]
          }
        ]
      },
      {
        "name": "Furlough that occurs during parts of one or more pay periods which is interrupted by days in pay and duty status (i.e., furlough on non-consecutive days)",
        "children": [
          {
            "name": "Is effected under 5 U.S.C. chapter 75",
            "children": [
              {
                "name": 473,
                "natureOfAction": "Furlough",
                "authorityCode": "VAJ",
                "authority": "5 U.S.C. 75",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)"
              }
            ]
          },
          {
            "name": "Is not effected under 5 U.S.C. chapter 75",
            "children": [
              {
                "name": 473,
                "natureOfAction": "Furlough",
                "authorityCode": "USM",
                "authority": "(Cite agency authority for furlough)",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "An indefinite suspension pending outcome of legal or investigative proceedings\r\n\r\n",
        "children": [
          {
            "name": "Effected under 5 U.S.C. chapter 75 (civil service adverse action procedures)",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "VAJ",
                "authority": "5 U.S.C. 75",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          },
          {
            "name": "Effected under agency procedures equivalent to those required under 5 U.S.C. chapter 75",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "USM",
                "authority": "(Cite agency authority for suspension)",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          },
          {
            "name": "Effected under other agency authority (e.g., constitutional or statutory authority)",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "USM",
                "authority": "(Cite agency authority for suspension)",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is directed by the Merit Systems Protection Board (see Note 1)\r\n",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "VAM",
                "authority": "5 U.S.C. 7703(b)(1)",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is taken in the interest of national security (see Note 1)\r\n\r\n",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "VSB",
                "authority": "5 U.S.C. 7532",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is effected under 5 U.S.C. chapter 75, i.e., under civil service adverse action procedures (see Note 1)",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "VAJ",
                "authority": "5 U.S.C. 75",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is effected under an agency authority, following procedures that are equivalent to those required under 5 U.S.C. chapter 75 (see Note 1)",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "USM",
                "authority": "(Cite agency authority for suspension)",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is effected under an agency authority that is not described in rules 11-22 (See Note 1)",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "USM",
                "authority": "(Cite agency authority for suspension)",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is effected by the Director of OPM under 5 USC 9204  (See Note 1)\r\n",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "V8C",
                "authority": "5 U.S.C. 9204",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Suspension that is effected by the Director of OPM under 5 USC 9204<  (See Note 1)",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 450,
                "natureOfAction": "Suspension-Indefinite",
                "authorityCode": "V8C",
                "authority": "5 U.S.C. 9204",
                "remarkCode": "M77",
                "remark": "Reason for suspension: (State reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Written warning (adverse action) that is effected by the Director of OPM under 5 USC 9204",
        "children": [
          {
            "name": "",
            "natureOfAction": "Written Warning/Admonishment",
            "authorityCode": "V8C",
            "authority": "5 U.S.C. 9204",
            "remarkCode": "M77",
            "remark": "Reason for written warning: (State reason)"
          }
        ]
      },
      {
        "name": "Leave without pay (LWOP)",
        "children": [
          {
            "name": "Granting LWOP for not more than 7 calendar days when employee did not request LWOP but has insufficient personal leave to his or her credit to cover absence for which personal leave would have been appropriate",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "ZLM",
                "authority": "Reg 630.208(a)",
                "remarkCode": "",
                "remark": ""
              }
            ]
          },
          {
            "name": "To serve as a military member but where restoration to duty is not covered by 5 CFR part 353",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "Q3K",
                "authority": "(Enter agency authority for LWOP for military service when employee does not have restoration rights)",
                "remarkCode": "M44",
                "remark": "Reason for leave without pay: Military service"
              }
            ]
          },
          {
            "name": "To serve as a military member where restoration to duty is covered by 5 CFR part 353",
            "children": [
              {
                "name": 473,
                "natureOfAction": "Furlough",
                "authorityCode": "VAJ",
                "authority": "5 U.S.C. 75",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)"
              }
            ]
          },
          {
            "name": "Requested by employee, and approved by agency, so employee or former employee can receive injury compensation under 5 U.S.C. chapter 81, subchapter I",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "QDQ",
                "authority": "Reg. 353.801",
                "remarkCode": "M43",
                "remark": "Reason for leave without pay: Injury/illness with entitlement to injury compensation benefits"
              }
            ]
          },
          {
            "name": "Requested by employee, and approved by agency, for any other reason when return to duty is expected",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "QNN",
                "authority": "Reg. 630.1001",
                "remarkCode": "",
                "remark": ""
              }
            ]
          },
          {
            "name": "For accepting temporary employment with an international organization",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "VUI",
                "authority": "5 U.S.C. 3582",
                "remarkCode": "M52",
                "remark": "Reason for leave without pay: On detail to (name of international organization)"
              }
            ]
          }
        ]
      },
      {
        "name": "Extension of Leave without Pay",
        "children": [
          {
            "name": "For same reason that original LWOP was approved and when new not-to-exceed date is to be documented",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "(Same as original)",
                "authority": "(Same as original)",
                "remarkCode": "",
                "remark": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Extension of Furlough NTE",
        "children": [
          {
            "name": "For same reason furlough was effected and when new not-to-exceed date is to be documented",
            "children": [
              {
                "name": 472,
                "natureOfAction": "Furlough NTE (Date)",
                "authorityCode": "(Same as original)",
                "authority": "(Same as original)",
                "remarkCode": "M72",
                "remark": "Reason for furlough: (state reason)"
              }
            ]
          }
        ]
      },
      {
        "name": "Sabbatical (see Note 4)",
        "children": [
          {
            "name": "For career Senior Executive Service appointee",
            "children": [
              {
                "name": 480,
                "natureOfAction": "Sabbatical NTE (date)",
                "authorityCode": "VKT",
                "authority": "5 U.S.C. 3396(c)(1)",
                "remarkCode": "",
                "remark": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Release of seasonal employee to nonpay and nonduty status to meet workload requirements",
        "children": [
          {
            "name": "When individual has completed the tour of duty for the work year or season",
            "children": [
              {
                "name": 430,
                "natureOfAction": "Placement in Nonpay Status",
                "authorityCode": "QTQ",
                "authority": "Reg. 340.402",
                "remarkCode": "",
                "remark": ""
              }
            ]
          }
        ]
      },
      {
        "name": "To document the beginning  of unpaid leave of absence (LWOP)  to perform duty with the uniformed services when the employee has restoration rights under 38 U.S.C. 4301. seq.",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 460,
                "natureOfAction": "Leave Without Pay NTE (Date)",
                "authorityCode": "QBK",
                "authority": "Reg. 353.106",
                "remarkCode": "M44",
                "remark": "Reason for leave without pay: Military service"
              }
            ]
          }
        ]
      },
      {
        "name": "To document the beginning of an employee's absence (whether in pay or nonpay status) to perform duty with the uniformed services when the employee has restoration rights under 38 U.S.C. 4301 et. seq.",
        "children": [
          {
            "name": "",
            "children": [
              {
                "name": 473,
                "natureOfAction": "Furlough",
                "authorityCode": "QBK",
                "authority": "Reg. 353.106",
                "remarkCode": "M35",
                "remark": "Reason for furlough: To perform service with the uniformed services"
              }
            ]
          }
        ]
      }
    ]
  };