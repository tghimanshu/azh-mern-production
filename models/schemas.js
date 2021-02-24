const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

// * CONNECTION

mongoose
  .connect("mongodb://localhost/AdvisorZarooriHai", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log(err.message));

// * SCHEMAS

const advisorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  summary: { type: String, default: "" },
  blogs: Array,
  experience: {
    type: Number,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sebi_no: {
    type: String,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

const clientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  postalCode: {
    type: String,
    default: "",
  },
  about_me: {
    type: String,
    default: "",
  },
  personal_details: {
    type: Object,
    default: {
      self: {
        name: "",
        dob: "",
        contact: "",
        email: "",
        profdetails: "",
      },
      spouse: {
        name: "",
        dob: "",
        contact: "",
        email: "",
        profdetails: "",
      },
      childrens: [
        {
          name: "",
          dob: "",
          contact: "",
          email: "",
          profdetails: "",
        },
      ],
    },
    income: {
      type: Object,
      default: {
        inc_self: 0,
        inc_spouse: 0,
        inc_parents: 0,
        inc_property: 0,
        inc_business: 0,
        inc_others: 0,
      },
    },
  },
  investments: {
    type: [Object],
    default: [
      {
        InvestmentAmount: 0,
        StartDate: "",
        MaturityDate: "",
        Tenure: 0,
        CurrentValue: 0,
        Purpose: "",
        InvestmentType: "",
        Products: "",
        InterestRate: 0,
      },
    ],
  },
  haveInvestments: {
    type: Boolean,
    default: true,
  },
  income: {
    type: Object,
    default: {
      inc_self: 0,
      inc_spouse: 0,
      inc_parents: 0,
      inc_property: 0,
      inc_business: 0,
      inc_others: 0,
    },
  },
  expenses: {
    type: Object,
    default: {
      monthly: {
        groceries: 0,
        education: 0,
        house_helps: 0,
        bills: 0,
        entertianment: 0,
        rent: 0,
        petrol: 0,
        others: 0,
        car_loan: 0,
        personal_loan: 0,
        home_loan: 0,
      },
      irregular: {
        travel: 0,
        big_purchases: 0,
        gifts: 0,
        medical: 0,
        others: 0,
      },
    },
  },
  goals: {
    type: Array,
    default: [
      {
        goal: "",
        remark: "",
        timeHorizon: "",
        amtNeededToday: 0,
      },
    ],
  },
  insurances: {
    type: Array,
    default: [
      {
        CompanyName: "",
        SumInsured: 0,
        PremiumAmount: 0,
        CommencementDate: "",
        Tenure: 0,
        PolicyStatus: "",
        Proposer: "",
        Policy0: "",
        Bonus: 0,
      },
    ],
  },
  haveInsurances: {
    type: Boolean,
    default: true,
  },
});

// const clientSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   contact: {
//     type: Number,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     default: "",
//   },
//   city: {
//     type: String,
//     default: "",
//   },
//   country: {
//     type: String,
//     default: "",
//   },
//   postalCode: {
//     type: String,
//     default: "",
//   },
//   about_me: {
//     type: String,
//     default: "",
//   },
//   personal_details: {
//     type: Object,
//     default: {
//       self: {
//         name: "",
//         dob: "",
//         contact: "",
//         email: "",
//         profdetails: "",
//       },
//       spouse: {
//         name: "",
//         dob: "",
//         contact: "",
//         email: "",
//         profdetails: "",
//       },
//       childrens: [
//         {
//           name: "",
//           dob: "",
//           contact: "",
//           email: "",
//           profdetails: "",
//         },
//       ],
//     },
//     income: {
//       type: Object,
//       default: {
//         inc_self: 0,
//         inc_spouse: 0,
//         inc_parents: 0,
//         inc_property: 0,
//         inc_business: 0,
//         inc_others: 0,
//       },
//     },
//   },
//   investments: {
//     type: [Object],
//     default: [
//       {
//         InvestmentAmount: 0,
//         StartDate: "",
//         MaturityDate: "",
//         Tenure: 0,
//         CurrentValue: 0,
//         Purpose: "",
//         InvestmentType: "",
//         Products: "",
//         InterestRate: 0,
//       },
//     ],
//   },
//   haveInvestments: {
//     type: Boolean,
//     default: true,
//   },
//   income: {
//     type: Object,
//     default: {
//       inc_self: 0,
//       inc_spouse: 0,
//       inc_parents: 0,
//       inc_property: 0,
//       inc_business: 0,
//       inc_others: 0,
//     },
//   },
//   expenses: {
//     type: Object,
//     default: {
//       monthly: {
//         groceries: 0,
//         education: 0,
//         house_helps: 0,
//         bills: 0,
//         entertianment: 0,
//         rent: 0,
//         petrol: 0,
//         others: 0,
//         car_loan: 0,
//         personal_loan: 0,
//         home_loan: 0,
//       },
//       irregular: {
//         travel: 0,
//         big_purchases: 0,
//         gifts: 0,
//         medical: 0,
//         others: 0,
//       },
//     },
//   },
//   goals: {
//     type: Array,
//     default: [
//       {
//         goal: "",
//         remark: "",
//         timeHorizon: "",
//         amtNeededToday: 0,
//       },
//     ],
//   },
//   insurances: {
//     type: Array,
//     default: [
//       {
//         CompanyName: "",
//         SumInsured: 0,
//         PremiumAmount: 0,
//         CommencementDate: "",
//         Tenure: 0,
//         PolicyStatus: "",
//         Proposer: "",
//         PolicyNumber: "",
//         Bonus: "",
//       },
//     ],
//   },
//   haveInsurances: {
//     type: Boolean,
//     default: true,
//   },
// });

const bookingSchema = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  advisor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Advisor",
    required: true,
  },
  booking_time: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  remarks: {
    type: String,
    default: "",
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    defualt: "pending",
  },
  recommendation: {
    type: String,
    default: "",
  },
  madePayment: {
    type: Boolean,
    default: false,
  },
  order_id: {
    type: String,
    default: "",
  },
});

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Page = mongoose.model(
  "Page",
  new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
  })
);

const Elearning = mongoose.model(
  "Elearning",
  new mongoose.Schema({
    title: String,
    author: String,
    image: String,
  })
);

// * GENERATING TOKENS

clientSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: "client" },
    config.get("jwt_secret")
  );
  return token;
};

advisorSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: "advisor" },
    config.get("jwt_secret")
  );
  return token;
};

adminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: "admin" },
    config.get("jwt_secret")
  );
  return token;
};

// * MODELS

const Advisor = mongoose.model("Advisor", advisorSchema);

const Client = mongoose.model("Client", clientSchema);

const Admin = mongoose.model("Admin", adminSchema);

const Booking = mongoose.model("booking", bookingSchema);

// * VALIDATION

const adminValidate = (data) => {
  return Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).max(255).required(),
  }).validate(data);
};

const clientValidate = (data) => {
  return Joi.object({
    username: Joi.string().min(5).max(255).required(),
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().required().email(),
    contact: Joi.number().required(),
    password: Joi.string().min(5).max(255).required(),
  }).validate(data);
};

const advisorValidate = (data) => {
  return Joi.object({
    username: Joi.string()
      .min(5)
      .max(255)
      .required()
      .regex(/[A-Za-z0-9_]/i),
    name: Joi.string().min(5).max(255).required(),
    location: Joi.string().min(5).max(255).required(),
    contact: Joi.number().required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(255).required(),
    experience: Joi.number().required(),
    sebi_no: Joi.string()
      .regex(/[A-Za-z]{3}[0-9]{9}/i)
      .trim()
      .required(),
    expertise: Joi.string().required(),
    profile_pic: Joi.string(),
  }).validate(data);
};

// * HASHING PASSWORD

async function hash_password(pass) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(pass, salt);
  return hashed;
}

module.exports = {
  Client: Client,
  Advisor: Advisor,
  Admin: Admin,
  Page: Page,
  Booking: Booking,
  Elearning: Elearning,
  adminValidate: adminValidate,
  advisorValidate: advisorValidate,
  clientValidate: clientValidate,
  hash_password: hash_password,
};
