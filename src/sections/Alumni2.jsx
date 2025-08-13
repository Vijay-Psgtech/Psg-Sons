import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaHandPointRight,
} from "react-icons/fa";
// import lottie from "lottie-web";
import NavButton from "../components/common/NavButton";
import { motion } from "framer-motion";
import { useParallaxBackground } from "../components/hooks/useParallaxBackground";

import {
  Alum1,
  Alum2,
  Alum3,
  Alum4,
  Alum5,
  Alum6,
  Alum7,
  Alum8,
  Alum9,
  Alum10,
  Alum11,
  Alum12,
  Alum13,
  Alum14,
  Alum15,
  Alum16,
  Alum17,
  Alum18,
  Alum19,
  Alum20,
  Alum21,
  Alum22,
  Alum23,
  Alum24,
  Alum25,
  Alum26,
  Alum27,
  Alum28,
  Alum29,
  Alum30,
  Alum31,
  Alum32,
  Alum33,
  Alum34,
  Alum35,
  Alum36,
  Alum37,
  Alum38,
  Alum39,
  Alum40,
  Alum41,
  Alum42,
  Alum43,
  Alum44,
  Alum45,
  Alum46,
  Alum47,
  Alum48,
  Alum49,
  Alum50,
  Alum51,
  Alum52,
  Alum53,
  Alum54,
  Alum55,
  Alum56,
  Alum57,
  Alum58,
  Alum59,
  Alum60,
  Alum61,
  Alum62,
  Alum63,
  Alum64,
  Alum65,
  Alum66,
  Alum67,
  Alum68,
  Alum69,
  Alum70,
  Alum71,
  Alum72,
  Alum73,
  Alum74,
  Alum75,
  Alum76,
  Alum77,
  Alum78,
  Alum79,
  Alum80,
  Alum81,
  Alum82,
  Alum83,
  Alum84,
  Alum85,
  Alum86,
  Alum87,
  Alum88,
  Alum89,
  Alum90,
} from "../assets/alumniImages";

const alumniGroups = {
  "PSG ARTS ALUMNI ASSOCIATION": [
    // Paste only relevant members for Arts group here
    {
      image: Alum1,
      name: "Shri. L. Gopalakrishnan",
      role: "Managing Trustee",
      details: "PSG & Sons Charities\nB.Com 1978–1981",
      description: " ",
      email: "charity@psgtech.edu",
    },
    {
      image: Alum2,
      name: "Dr. T. Kannaian",
      role: "Secretary",
      details: "PSG College of Arts & Science",
      description: "",
      email: "secretary@psgcas.ac.in",
    },
    {
      image: Alum3,
      name: "Dr. M. Senguttuvan",
      role: "Principal Incharge",
      details: "",
      description: " ",
      email: "principal@psgcas.ac.in",
    },
    {
      image: Alum4,
      name: "Mr. Mahendra Ramdas",
      role: "Past President",
      details: "",
      description:
        "B.Sc Physics 1975 1978 Mahendra Pumps Pvt. Ltd., No.15, New Damu Nagar, Coimbatore South, Pappanaickenpalayam, Coimbatore 641 037",
      email: "mramdas@mahendrapumps.in",
    },
    {
      image: Alum5,
      name: "Mr. R. Nandagopal",
      role: "Past President",
      details: "",
      description:
        "PUC 1974-1975 B.Com 1975 1978 M.Com 1978 1980 Director General, 24, Rajalakshmi Nagar, Masakalipalyam Road, Peelamedu Post, Coimbatore-641 004",
      email: "director.nandagopal@gmail.com",
    },
    {
      image: Alum6,
      name: "Mr.T.Rajkumar",
      role: "Past President",
      details: "",
      description:
        "B.A Economics 1985-1988 Sri Mahasakthi Mills Ltd., #705-D3, Avinashi Road, Coimbatore 641 018.",
      email: "trajkumar@sakthisugars.com",
    },
    {
      image: Alum7,
      name: "Mr.V.Lakshminarayanasamy",
      role: "Past President",
      details: "",
      description:
        "PUC 1972-1976 B.Com 1973-1976 Suguna Group, #707, Avinashi Road, Coimbatore 641018.",
      email: "sugulns@gmail.com",
    },

    {
      image: Alum8,
      name: "Mr.R.Mahendran",
      role: "Past President",
      details: "",
      description:
        "B.Com 1973-1976 The PalaniAndavar Mills Ltd 104, West Ponnurangam Road, R.S.Puram Post,Coimbatore - 641002.",
      email: "sugulns@gmail.com",
    },

    {
      image: Alum9,
      name: "Mr. Jayakumar Ramdass",
      role: "President",
      details:
        "B.Sc Chemistry 1980–1983\nMahendra Pumps Pvt Ltd\nPuliakulam, Coimbatore – 641 045",
      description: "",
      email: "jramdass@mahendrapumps.in",
    },
    {
      image: Alum10,
      name: "Mr. S. Krishna Kumar",
      role: "Vice President",
      details:
        "B.A Psychology 1981–1984\nSulochana Cotton Spinning Mills Ltd\nCoimbatore",
      description: "",
      email: "s.krishnakumar@gmail.com",
    },
    {
      image: Alum11,
      name: "Mr.J.Prithiviraj",
      role: "Vice President",
      details:
        "B.Sc Physics 1975 1978 Mahendra Pumps Pvt. Ltd., No.15, New Damu Nagar, Coimbatore South, Pappanaickenpalayam, Coimbatore 641 037",
      description: "",
      email: "s.krishnakumar@gmail.com",
    },
    {
      image: Alum12,
      name: "Mr.CA.L.Kamesh",
      role: "Secretary",
      details:
        "B.Com 1992-1995 Auditor, Lakshmi Narayanan Associates, Chartered Accountants Lakshya, 1056/1, Avinashi Road, Coimbatore - 641 018",
      description: "",
      email: "",
    },
    {
      image: Alum13,
      name: "Mr.S.Chandrasekar",
      role: "Joint Secretary",
      details:
        "M.A. Mass Communication 1989-1991 N Mahalingam& Company 68, Dr. Nanjappa Road, Coimbatore - 641 018",
      description: "",
      email: "toshaky@hotmail.com",
    },

    {
      image: Alum14,
      name: "Dr.B.Ramesh",
      role: "Treasurer",
      details:
        "B.Sc Bio Chemistry 1992 1995 M.Sc Bio Chemistry 1995 1997 M.Phil in Bio Chemistry 2005 2006 Ph.D in Bio Chemistry 2007-2010 Associate Professor, Dept.of Biochemistry #487, G.V.",
      description: "",
      email: "toshaky@hotmail.com",
    },
    {
      image: Alum15,
      name: "Mr.Rajesh Lund",
      role: "Executive Committee Member",
      details:
        "B.Com 1977-1980 Srivari Property Developers, #18, East Periyaswamy Road, RS Puram, Coimbatore- 641002.",
      description: "",
      email: "rajeshlund@yahoo.com",
    },
    {
      image: Alum16,
      name: "Ms.V.Kavitha",

      role: "Executive Committee Member",
      details:
        "B.Sc Nutrition & Dietetics 1990-1993 M.Sc Nutrition & Dietetics 2004 2006 154, GRG Nagar,VIP Road, Near Codissia, Civil Aerodrome Post, Coimbatore641 014",
      description: "",
      email: "kavithadietitian@gmail.com",
    },

    {
      image: Alum17,
      name: "Mr.Naresh Devaraj",

      role: "Executive Committee Member",
      details:
        "BBM 1993-1996 Sri Murugar Spinning Mills 23, School Road, II Layout, Krishnaswamy Nagar, Coimbatore 641 045",
      description: "",
      email: "nareshdevaraj@gmail.com",
    },
    {
      image: Alum18,
      name: "Mr. N. Krishna Kumar",

      role: "Executive Committee Member",
      details:
        "B.Sc Mathematics 1977-1980 Akash Advertising Consults, #81, Annai Street, Ram Nagar, Coimbatore- 641 009",
      description: "",
      email: "krishnakumar.akarsh@gmail.com",
    },
    {
      image: Alum19,
      name: "Mr. J.Ramanujam,",

      role: "Executive Committee Member",
      details:
        "B.Com 1976-1979 Accounts Executive, PSG Industrial Institute, #12, Abdul Rahim Road, Race Course Road, Coimbatore - 18",
      description: "",
      email: "j_rmsh@yahoo.co.in",
    },

    {
      image: Alum20,
      name: "Mr. K. Ravindran",

      role: "Executive Committee Member",
      details:
        "B.Com 1989-1992 C/o Saravana Garments, Sri Lakshmi Nagar, Vengamedu, Angeripalayam Post, Tirupur- 641 803",
      description: "",
      email: "ckravindran72@gmail.com",
    },
    {
      image: Alum21,
      name: "Dr. K. Rajeswari",

      role: "Executive Committee Member",
      details:
        "BA English 1991-1994 MSW 1994-1996 M.Phil in Social Work 2004-2005 Ph.D in Social Work 2007-2010 A-313, Casa Blanca Apartments, Tirupathi Avenue, Nehru Nagar East, Civil Aerodrome Post,",
      description: "",
      email: "",
    },
    {
      image: Alum22,
      name: "Dr. P. Govindaraj",

      role: "Executive Committee Member",
      details:
        "BCS, M.Phil in Commerce 2004-2007 & Ph.D in Commerce 2009-2010 2011-2019",
      description: "",
      email: "govivp@yahoo.com",
    },

    {
      image: Alum23,
      name: "CA.N.Pratap Balaji",

      role: "Executive Committee Member",
      details:
        "B.Com 1998-2001 Auditor, Manohar Chowdry & Associates, #1055/27 (old) 750/28 (New), Gowtham Centre, Avinashi Road, Coimbatore-641 018",
      description: "",
      email: "pratap@mca.co.in",
    },
    {
      image: Alum24,
      name: "Mr.A.Kalyanasundaram",

      role: "Special Invitee",
      details: "B.Com 1982-1985",
      description: "",
      email: "ak_sundaram@yahoo.co.in",
    },
    {
      image: Alum25,
      name: "Mr.Kalyan Kumar",

      role: "Special Invitee",
      details: "B.A Corporate Secretaryship 1987-1990",
      description: "",
      email: "kalyan_soundaryan@yahoo.co.in",
    },
    {
      image: Alum26,
      name: "Mr. Ki. Antony Johnson,",

      role: "Special Invitee",
      details:
        "BA Economics 1980-1983 MA Social Work 1983-1985 #13a, Archana Garden, Gowndampalayam, Coimbatore-641 030",
      description: "",
      email: "ki.antonyjohnson@gmail.com",
    },
    {
      image: Alum27,
      name: "Mr. V. Ravichandar",
      role: "Special Invitee",
      details:
        "BA Economics 1980-1983 MA Social Work 1983-1985 No.15, Sornapuri Layout, Brindhavan Circle North, Kuniyamuthur, Coimbatore-641 008",
      description: "",
      email: "ravichandar.venugopal@gmail.com",
    },
    {
      image: Alum28,
      name: "Mrs.R.Poornima",
      role: "Co-ordinator",
      details:
        "PSG Arts Alumni Association #B402, B Block, Sri Annai Aishwaryam Grand Apartment, Gurusamynagar, Thaneerpandal Road, Peelamedu, Coimbatore 641 004.",
      description: "",
      email: "",
    },
  ],

  "PSG TECH ALUMNI ASSOCIATION": [
    {
      image: Alum1,
      name: "Shri. L. Gopalakrishnan",
      role: "Managing Trustee",
      details: "PSG & Sons Charities\nB.Com 1978–1981",
      description: " ",
      email: "charity@psgtech.edu",
    },
    {
      image: Alum29,
      name: "Dr.K.Prakasan",
      role: "Patron",
      details: "Principal",
      description: "PSG College of Technology Peelamedu, Coimbatore - 641 004",
      email: "principal@psgtech.ac.in",
    },
    {
      image: Alum30,
      name: "Mr.R.Mylsamy, BE '82",
      role: "President",
      details: "Managing Director",
      description:
        " M M Gears Pvt Ltd. 1/285, Mudalipalayam Road, Arasur Post, Coimbatore - 641 407",
      email: "md@mmgears.in",
    },
    {
      image: Alum31,
      name: "Mr.K.P.M.Muthukumaran, BE '92",
      role: "Vice President",
      details: "Chief Executive, KPM Plasto Rubber Co.,",
      description:
        "11/66 - E, TrichyRoad,RavathurPrivu, Kannampalayam Post, Sulur, Coimbatore - 641 402",
      email: "muthu@kpmrubber.com",
    },
    {
      image: Alum32,
      name: "Mr.V.Krishnakumar, BE '79",
      role: "Vice President",
      details: "Vice President - Sales & Marketing",
      description: "Aquasub Engineering, Thudiyalur Post, Coimbatore - 641 034",
      email: "vkk_kishore41055@yahoo.co.in",
    },
    {
      image: Alum33,
      name: "Mr.R.Balaji, BE'86",
      role: "Vice President",
      details: "Managing Director,",
      description:
        "Millennium Machine Works 15, P.V.Krishnan Street, K.K.Pudur, Coimbatore - 641 038.",
      email: "balajier2000@yahoo.co.in",
    },
    {
      image: Alum34,
      name: "Mr.A.Senthil Kumar, Dip '93",
      role: "Vice President",
      details: "Proprietor, SK Industries",
      description:
        "No.8, First Street, Park Avenue, Thudiyalur Coimbatore - 641 034",
      email: "kumar_ski@yahoo.com",
    },

    {
      image: Alum35,
      name: "Dr.M.Arasu, BE '95",
      role: "Secretary",
      details: "Head of the Department",
      description:
        "Department of Foundry Technology PSG Polytechnic College Coimbatore - 641 004",
      email: "mar.alu@psgtech.ac.in",
    },

    {
      image: Alum36,
      name: "Dr.R.Murugan, B.Tech '96",
      role: "Secretary",
      details: "Associate Professor",
      description:
        "Department of Textile Technology PSG College of Technology Coimbatore - 641004",
      email: "rmn.textile@psgtech.ac.in",
    },
    {
      image: Alum37,
      name: "Dr.P.Visalakshi, ME '04",
      role: "Secretary",
      details: "Professor",
      description:
        "Department of Electronics & Communication Engineering PSG College of Technology Coimbatore - 641004",
      email: "spv.ece@psgtech.ac.in",
    },
    {
      image: Alum38,
      name: "Dr.S.Udhayakumar, PhD'14",
      role: "Secretary",
      details: "Asst Professor",
      description:
        "Department of Mechanical Engineering PSG College of Technology Peelamedu, Coimbatore - 641 004",
      email: "suk.mech@psgtech.ac.in",
    },
    {
      image: Alum39,
      name: "Dr.S.Brindha, ME'06",
      role: "Head of theDepartment",
      details: "",
      description:
        "Dept of Computer Networking PSG Polytechnic College Coimbatore - 641004",
      email: "hod.dcn@psgpolytech.ac.in",
    },
    {
      image: Alum40,
      name: "Dr.M.Sundaram, ME '04",
      role: "Treasurer",
      details: "Associate Professor",
      description:
        "Department of Electrical and Electronics Engineering PSG College of Technology Coimbatore 641004",
      email: "msm.eee@psgtech.ac.in",
    },

    {
      image: Alum41,
      name: "Mr.D.Nandakumar, BE '86",
      role: "Immediate Past President",
      details: "CEO, Selvam Agencies,",
      description: "40, Dr.Nanjappa Road, Coimbatore - 641 018",
      email: "selvamagenciescbe@gmail.com",
    },
  ],

  "PSG IMSR ALUMNI ASSOCIATION": [
    {
      image: Alum42,
      name: "Dr P S T Jambukeswaran. MBBS., MS.",
      role: "PRESIDENT",
      details: "",
      description:
        "Batch of 1987. Professor , Department of Orthopaedics, Government ESI Medical College, Coimbator ",
      email: "",
    },
    {
      image: Alum43,
      name: "Dr R Amuthakumar MBBS., MD.",
      role: "Vice-President",
      details: "",
      description:
        "Batch of 1985 Critical care Physician, Director SKG Hospitals, Madurai.",
      email: "",
    },
    {
      image: Alum44,
      name: "Dr J Jegadheeshwararaj MBBS., MD.",
      role: "Secretary",
      details: "",
      description:
        "Batch of 2001 Professor & Head Department of Forensic Medicine PSG IMSR&H, Coimbatore ",
      email: "",
    },
  ],

  "PSG MANAGEMENT ALUMNI ASSOCIATION": [
    {
      image: Alum45,
      name: "Ms.Preetha S Priyadarsini Naidu",
      role: "Chairman, PSG MAA Founder CEO",
      details: "",
      description:
        "Richmond talent Solutions Private Limited No.5, Electrical & Electronics Industrial Estate, Coimbatore 641014 ",
      email: "preethasnaidu@gmail.com",
    },
    {
      image: Alum46,
      name: "Dr V Harish",
      role: "Secretary PSG MAA Assistant Professor (SL GR)",
      details: "",
      description: "PSG Institute of Management Peelamedu, Coimbatore ",
      email: "harish@psgim.ac.in",
    },

    {
      image: Alum47,
      name: "Mr.CR Shivakumar",
      role: "Vice Chairman, PSG MAA CEO",
      details: "",
      description:
        "DVIPL 5, School road,Krishnaswamy nagar, Ramanathapuram Coimbatore 641045 ",
      email: "shiva@dvipl.com",
    },

    {
      image: Alum48,
      name: "Ms.Yamini Vijay",
      role: "Vice Chairman, PSG MAA Proprietrix",
      details: "",
      description:
        "Shree Naga HP Gas 18A, Mariamman Kovil Street Corner, Metupalayam Raod,, Coimbatore 641 031 ",
      email: "yamini.janarthan@gmail.com",
    },

    {
      image: Alum49,
      name: "Mr.C.Shanthakumar",
      role: "Joint Secretary, PSG MAA Director",
      details: "",
      description:
        "Bigbodhi Academy Avant Garde, 13/2, Ari garden, Sitra, Coimbatore 641 048",
      email: "santhosh24@gmail.com",
    },

    {
      image: Alum50,
      name: "Mr. K.Prasanna Kandeepan",
      role: "Joint Secretary, PSG MAA Founder & Chief Executive Officer",
      details: "",
      description:
        "Apps Comp Widgets Pvt ltd, D-T7 Royal Sheraton, Nanjundapuram road,Coimbatore -641036 ",
      email: "prasannak005@gmail.com",
    },

    {
      image: Alum51,
      name: "Mr.G.Padmanabhan",
      role: "Treasurer, PSG MAA",
      details: "",
      description:
        "A2/11, Sreevasta Enclave, G .N Mills (PO), Coimbatore - 641029 ",
      email: "paddu.g@gmail.com",
    },
  ],

  "PSG COLLEGE OF NURSING ALUMNI ASSOCIATION": [
    {
      image: Alum1,
      name: "Shri. L. Gopalakrishnan",
      role: "Managing Trustee",
      details: "PSG & Sons Charities\nB.Com 1978–1981",
      description: " ",
      email: "charity@psgtech.edu",
    },
    {
      image: Alum52,
      name: "Dr.A.JAYASUDHA",
      role: "CHAIRPERSON",
      details: "PRINCIPAL",
      description: " ",
      email: "",
    },
    {
      image: Alum53,
      name: "Mrs. RAJESWARI P.M",
      role: "PRESIDENT",
      details: "2010 Batch M.Sc. Alumni",
      description: " ",
      email: "",
    },
    {
      image: Alum54,
      name: "Ms. JESIKA MARY",
      role: "VICE PRESIDENT",
      details: "2013 Batch B.Sc. Alumni",
      description: " ",
      email: "",
    },
    {
      image: Alum55,
      name: "Mrs.KARTHIGAI DEEPA",
      role: "SECRETARY",
      details: "2019 Batch M.Sc. Alumni",
      description: " ",
      email: "",
    },
    {
      image: Alum56,
      name: "Ms. SANTHIYA.M",
      role: "TREASURER",
      details: "2012 Batch B.Sc. Alumni",
      description: " ",
      email: "",
    },
  ],
  "PSG COLLEGE OF PHYSIOTHERAPY ALUMNI ASSOCIATION": [
    {
      image: Alum57,
      name: "Prof. Mahesh R",
      role: "President",
      details: "Principal",
      description: "PSG College of Physiotherapy ",
      email: "",
    },
    {
      image: Alum58,
      name: "Prof. Y.Ashraf",
      role: "Vice President",
      details: "Professor/CPS",
      description: " PSG College of Physiotherapy",
      email: "",
    },

    {
      image: Alum59,
      name: "Parthiban A",
      role: "Secretary",
      details: "(2005 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum60,
      name: "Nagul T",
      role: "Vice Secretary",
      details: "(2015 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum61,
      name: "Sathiyamoorthi P",
      role: "Treasurer",
      details: "(2002 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum62,
      name: "Murali G",
      role: "Executive Members",
      details: "(1999 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum63,
      name: "Iyyappan S",
      role: "Executive Members",
      details: "(2002 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum64,
      name: "Nivedita L",
      role: "Executive Members",
      details: "(2009 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum65,
      name: "Arul U",
      role: "Executive Members",
      details: "(2011 Batch)",
      description: " ",
      email: "",
    },
    {
      image: Alum66,
      name: "Aswin S",
      role: "Executive Members",
      details: "(2015 Batch)",
      description: " ",
      email: "",
    },

    {
      image: Alum67,
      name: "Anuvalliyammai AL",
      role: "Executive Members",
      details: "(2017 Batch)",
      description: " ",
      email: "",
    },
  ],
  "PSG COLLEGE OF PHARMACY ALUMNI ASSOCIATION": [
    {
      image: Alum68,
      name: "DR.M.RAMANATHAN",
      role: "PRESIDENT",
      details: "PRINCIPAL",
      description: " PSG COLLEGE OF PHARMACY,COIMBATORE ",
      email: "",
    },
    {
      image: Alum69,
      name: "MR.L.SARAVANAN",
      role: "VICE-PRESIDENT",
      details: "PROPRIETOR",
      description: "ARUN CLINICAL LABORATORY ",
      email: "",
    },
    {
      image: Alum70,
      name: "MR. V. ARUN KUMAR",
      role: "GENERAL SECRETARY",
      details: "ENTREPRENEUR",
      description: "HEALTH CARE PLUS PHARMACY ",
      email: "",
    },
    {
      image: Alum71,
      name: "Mrs. J ESTHER JAYASHEELA",
      role: "JOINT SECRETARY",
      details: "DRUGS INSPECTOR",
      description: "DIRECTORATE OF DRUGS CONTROL, GOVERNMENT OF TAMILNADU. ",
      email: "",
    },
    {
      image: Alum72,
      name: "MR.M.NITHYANANTH",
      role: "TREASURER",
      details: "ASSISTANT PROFESSOR",
      description: "PSG COLLEGE OF PHARMACY,COIMBATORE",
      email: "",
    },
    {
      image: Alum73,
      name: "DR.L.BRITTO DURAISINGH",
      role: "EXECUTIVE MEMBER",
      details: "HEAD - DEPARTMENT OF PHARMACY",
      description: " GANGA MEDICAL CENTRE ANDHOSPITALSPVTLTD, COIMBATORE ",
      email: "",
    },
    {
      image: Alum74,
      name: "MR. N. RAJESH KUMAR",
      role: "EXECUTIVE MEMBER",
      details: "ASSOCIATE PROFESSOR",
      description: "SENGHUNDHAR COLLEGE OF PHARMACY, TIRUCHENGODE, NAMAKKAL ",
      email: "",
    },
    {
      image: Alum75,
      name: "MR.R.MUTHUSWAMI",
      role: "EXECUTIVE MEMBER",
      details: "ENTREPRENEUR",
      description: " BIOXPLORA, COIMBATORE. ",
      email: "",
    },
    {
      image: Alum76,
      name: "MRS. S.C. BAVIYA",
      role: "EXECUTIVE MEMBER",
      details: "REGULATORY COORDINATOR FOR INDIA",
      description: " MAXMIND PHARMACEUTICALS, CHINA. ",
      email: "",
    },
    {
      image: Alum77,
      name: "MS.M.INDHUPRIYADHARSHINI",
      role: "EXECUTIVE MEMBER",
      details: "LECTURER",
      description: "PSG COLLEGE OF PHARMACY, COIMBATORE ",
      email: "",
    },
    {
      image: Alum78,
      name: "MRS.S.VISHNUPRIYA",
      role: "EXECUTIVE MEMBER",
      details: "ASSISTANT PROFESSOR",
      description: " PSG COLLEGE OF PHARMACY, COIMBATORE ",
      email: "",
    },
    {
      image: Alum79,
      name: "Mr.MOHAMMED IKRAM",
      role: "EXECUTIVE MEMBER",
      details: "ENTREPRENEUR",
      description: " PROPERITER BAWA MEDICALS, COIMBATORE ",
      email: "",
    },
  ],
  "PSG SARVAJANA ALUMNI ASSOCIATION": [
    {
      image: Alum80,
      name: "Mr.P.NARAYANASWAMI",
      role: "PRESIDENT",
      details: "SECRETARY",
      description: " PSG SARVAJANA HSS ",
      email: "",
    },
    {
      image: Alum81,
      name: "Mr.R.RAMESH",
      role: "VICE PRESIDENT",
      details: "",
      description: "  ",
      email: "",
    },
    {
      image: Alum82,
      name: "Ms.G.M.DHARANI",
      role: "SECRETARY",
      details: "",
      description: "  ",
      email: "",
    },
    {
      image: Alum83,
      name: "Mr.J.SIVAKUMAR",
      role: "JOINT SECRETARY",
      details: "",
      description: "",
      email: "",
    },

    {
      image: Alum84,
      name: "Mr.K.SAMATHANA PRABHU",
      role: "TREASURER",
      details: "",
      description: "  ",
      email: "",
    },
    {
      image: Alum85,
      name: "Mr.J.T.S.UDHAYAKUMAR",
      role: "JOINT TREASURER I",
      details: "",
      description: " ",
      email: "",
    },
    {
      image: Alum86,
      name: "Mr.PRAKASH KRISHNAMOORTHY",
      role: "JOINT TREASURER II",
      details: "",
      description: "  ",
      email: "",
    },
    {
      image: Alum87,
      name: "Mr.NANDAKUMAR RAJAGOPAL",
      role: "ADVISORY COMMITTEE",
      details: "VICE PRESIDENT",
      description: " LEGAL & ADMINISTRATION LEAP GREEN ENERGY PVT LTD., ",
      email: "",
    },
    {
      image: Alum88,
      name: "Dr.B.RAMAMOORTHY",
      role: "ADVISORY COMMITTEE",
      details: "SECRETARY",
      description: " TQM PSG INSTITUTIONS",
      email: "",
    },
    {
      image: Alum89,
      name: "Mr.G.CHANDRAMOHAN",
      role: "ADVISORY COMMITTEE",
      details: "DIRECTOR EXAMINATIONS PSG INSTITUTIONS",
      description: "",
      email: "",
    },
    {
      image: Alum90,
      name: "Mr.V.JAGANNATHAN",
      role: "ADVISORY COMMITTEE",
      details: "GENERAL MANAGER",
      description: " PSG HOSPITALS ",
      email: "",
    },
  ],
};

const Alumni2 = () => {
  const scrollRef = useRef(null);
  const [selectedGroup, setSelectedGroup] = useState(
    "PSG ARTS ALUMNI ASSOCIATION"
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const { handleMouseMove, translateX } = useParallaxBackground(20, 80);

  // Touch & drag scroll
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = slider.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
    };

    const whileDragging = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5; // drag speed
      slider.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    slider.addEventListener("mousedown", startDragging);
    slider.addEventListener("mouseleave", stopDragging);
    slider.addEventListener("mouseup", stopDragging);
    slider.addEventListener("mousemove", whileDragging);

    // Touch events
    slider.addEventListener("touchstart", startDragging);
    slider.addEventListener("touchend", stopDragging);
    slider.addEventListener("touchmove", whileDragging);

    return () => {
      slider.removeEventListener("mousedown", startDragging);
      slider.removeEventListener("mouseleave", stopDragging);
      slider.removeEventListener("mouseup", stopDragging);
      slider.removeEventListener("mousemove", whileDragging);

      slider.removeEventListener("touchstart", startDragging);
      slider.removeEventListener("touchend", stopDragging);
      slider.removeEventListener("touchmove", whileDragging);
    };
  }, []);

  const handleScrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  const currentAlumni = alumniGroups[selectedGroup] || [];

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#alumni.2" && scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div
      className="section min-h-screen w-full relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.img
        style={{ x: translateX }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        src="/images/bg2.webp"
        alt="Alumni Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110"
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-9 py-10 sm:py-42 md:py-30 flex flex-col items-center">
        {/* Dropdown */}
        <div className="relative mb-3 w-full max-w-xs sm:max-w-md h-5 py-7">
          <button
            className="p-3 text-blue-800 text-sm mx-auto border-b bg-white drop-shadow-lg rounded-lg flex items-center gap-2 w-full justify-between"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedGroup}
            <FaChevronDown />
          </button>
          {showDropdown && (
            <div className="absolute top-full mt-2 left-0 bg-white rounded shadow-lg z-50 w-full sm:w-80">
              {Object.keys(alumniGroups).map((group) => (
                <div
                  key={group}
                  onClick={() => {
                    setSelectedGroup(group);
                    setShowDropdown(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                    selectedGroup === group
                      ? "text-blue-700 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {group}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Alumni Slider */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <div className="hidden md:flex shrink-0 gap-4 absolute right-16 bottom-12 z-20">
            <NavButton onClick={handleScrollLeft}>
              <FaChevronLeft />
            </NavButton>

            <NavButton onClick={handleScrollRight}>
              <FaChevronRight />
            </NavButton>
          </div>

          {/* Alumni Cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-hidden scroll-smooth pb-6 sm:pb-8 pt-4 px-2 sm:px-4 cursor-grab active:cursor-grabbing"
          >
            {currentAlumni.map((alum, index) => (
              <div
                key={index}
                className="shrink-0 w-56 sm:w-64 md:w-72 rounded-lg p-5 sm:p-6 text-center bg-opacity-80 md"
              >
                <img
                  src={alum.image}
                  alt={alum.name}
                  className="w-full h-60 object-cover rounded-lg mb-4 sm:mb-6"
                />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight whitespace-pre-wrap">
                  {alum.name}
                </h1>
                <div className="font-sans mt-1 text-xs sm:text-sm">
                  {alum.role}
                </div>
                <p className="mt-2 font-sans font-semibold text-xs sm:text-sm">
                  {alum.details}
                </p>
                <p className="mt-2 font-sans font-semibold text-xs sm:text-sm">
                  {alum.description}
                </p>
                <a
                  href={`mailto:${alum.email}`}
                  className="font-sans mt-4 text-xs sm:text-sm underline block"
                >
                  {alum.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe Animation (Mobile Only) */}
        <div className="md:hidden mb-2 flex flex-col items-center text-lg text-black">
          <span className="mb-1">Swipe to Navigate</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-1"
          >
            <FaHandPointRight className="text-xl w-6 h-6 text-indigo-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Alumni2;
