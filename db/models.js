import { Sequelize, DataTypes } from "sequelize";
const {
  STRING,
  BOOLEAN,
  TINYINT,
  BLOB,
  INTEGER,
  DOUBLE,
  ARRAY,
  DATEONLY,
  TEXT,
  YEAR,

} = DataTypes;

const sequelize = new Sequelize("cug_src", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const Executives = sequelize.define(
  "executives",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    faculty: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "executives",
  }
);

const Associations = sequelize.define(
  "associations",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    faculty: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "associations",
  }
);

const AcademicCommittee = sequelize.define(
  "academicCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "academicCommittee",
  }
);

const EditorialCommittee = sequelize.define(
  "editorialCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "editorialCommittee",
  }
);

const EstateCommittee = sequelize.define(
  "estateCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "estateCommittee",
  }
);

const FinanceCommittee = sequelize.define(
  "financeCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "financeCommittee",
  }
);

const JudiciaryCommittee = sequelize.define(
  "judiciaryCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "judiciaryCommittee",
  }
);

const OrganizingCommittee = sequelize.define(
  "organizingCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "organizingCommittee",
  }
);



const ProcurementCommittee = sequelize.define(
  "procurementCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "procurementCommittee",
  }
);

const ReligiousCommittee = sequelize.define(
  "religiousCommittee",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
  },
  {
    tableName: "religiousCommittee",
  }
);

const Contacts = sequelize.define(
  "contacts",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
    position: { type: STRING, allowNull: false },
    phone_no: { type: STRING, allowNull: false },
    email: { type: STRING, allowNull: false },
  },
  {
    tableName: "contacts",
  }
);
const News = sequelize.define(
  "news",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
    date: { type: DATEONLY, allowNull: false },
    news: {type: TEXT, allowNull: false},
    category: { type: STRING, allowNull: false },
  },
  {
    tableName: "news",
  }
);

const Events = sequelize.define(
  "events",
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: STRING, allowNull: false },
    img: { type: STRING, allowNull: false },
    date: { type: DATEONLY, allowNull: false },
    description: { type: STRING, allowNull: false },
    event: { type: TEXT, allowNull: false },
  },
  {
    tableName: "events",
  }
);

const Students = sequelize.define(
  "students",
  {
    // id: {
    //   type: STRING,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    graduating_year: { type: STRING, allowNull: false },
    faculty: { type: STRING, allowNull: false },
    department: { type: STRING, allowNull: false },
    name: { type: STRING, allowNull: false },
    student_id: { type: STRING, allowNull: true },
    admission_year: { type: STRING, allowNull: false },
    submission_date: { type: DATEONLY, allowNull: false },
    supervisor_name: { type: STRING, allowNull: false },
    supervisor_comment: { type: STRING, allowNull: false },
  },
  {
    tableName: "students",
  }
);

const Regulator = sequelize.define(
  "regulators",
  {
    // id: {
    //   type: INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    //   primaryKey: true,
    // },
    firstname: { type: STRING, allowNull: false },
    surname: { type: STRING, allowNull: false },
    othername: { type: STRING, allowNull: true },
    email: { type: STRING, allowNull: false },
    password: { type: STRING, allowNull: false },
    gender: { type: STRING, allowNull: false },
    department: { type: STRING, allowNull: false },
    userstatus: { type: TINYINT, allowNull: false, defaultValue: 0 },
  },
  {
    tableName: "regulators",
  }
);

// const Admin = sequelize.define(
//   "admins",
//   {
//     username: { type: STRING, allowNull: false },
//     password: { type: STRING, allowNull: false },
//     role: { type: STRING, allowNull: false },
//     system: { type: INTEGER, allowNull: false },
//   },
//   {
//     tableName: "admin",
//   }
// );

const StudentsProjects = sequelize.define(
  "studentprojects",
  {

    student_id: {
      type: STRING,
      allowNull: false,
    },
    studentname: { type: STRING, allowNull: false },
    supervisorname: { type: STRING, allowNull: false },
    title: { type: STRING, allowNull: false },
    abstract: { type: TEXT, allowNull: false },
    language: { type: STRING, allowNull: false },
    objective: { type: TEXT, allowNull: false },
    document: { type: TEXT, allowNull: false },
    file_name: { type: STRING, allowNull: false },
    // file_path: { type: STRING, allowNull: false },
    year: { type: STRING, allowNull: false },
  },
  {
    tableName: "studentprojects",
  }
);
const Admins = sequelize.define(
  "admins", {
    username: {type: STRING, allowNull: false, unique: true},
    password: {type: STRING, allowNull: false},
    role: {type: INTEGER, allowNull: false},

  },{
    tableName: "admins",
  }
) 
// sequelize.sync();

export const models = {
  Admins,
  ReligiousCommittee,
  ProcurementCommittee,
  Executives,
  Associations,
  Contacts,
  News,
  Events,
  AcademicCommittee,
  EditorialCommittee,
  EstateCommittee,
  FinanceCommittee,
  JudiciaryCommittee,
  OrganizingCommittee,
  // Admin,
  Students,
  Regulator,
  StudentsProjects,
  sequelize,
};
