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

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

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
  availability: {
    type: String,
    enum: ["In Office", "Out of Office"],
    default: "In Office",
  },
  email: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
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
  socials: Array,
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
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  assignedLeads: [Object],
  profileCompleted: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: Array,
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
        },
      ],
    },
  },
  investments: {
    type: [Object],
    default: [
      {
        InvestmentAmount: Number,
        StartDate: "",
        MaturityDate: "",
        Tenure: Number,
        CurrentValue: Number,
        Purpose: "",
        InvestmentType: "",
        // Products: "",
        scheme: "",
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
        life_insurance: 0,
        health_insurance: 0,
        other_insurance: 0,
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
        amtNeededToday: Number,
        achievementYear: "",
        startYear: "",
        amtSaved: Number,
      },
    ],
  },
  haveGoals: {
    type: Boolean,
    default: true,
  },
  insurances: {
    type: Array,
    default: [
      {
        CompanyName: "",
        SumInsured: Number,
        PremiumAmount: Number,
        CommencementDate: "",
        Tenure: Number,
        PolicyStatus: "",
        plan: "",
      },
    ],
  },
  haveInsurances: {
    type: Boolean,
    default: true,
  },
  assets: {
    type: Array,
    default: [
      {
        type: "",
        amtTillDate: Number,
        remark: "",
      },
    ],
  },
  haveAssets: {
    type: Boolean,
    default: true,
  },
  liabilities: {
    type: Array,
    default: [
      {
        type: "",
        balance: Number,
        emi: Number,
        term: Number,
        rate: Number,
      },
    ],
  },
  haveLiabilities: {
    type: Boolean,
    default: true,
  },
  assigned: Object,
});

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

const feedbackFormSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  certificate: {
    type: Boolean,
    default: false,
  },
  questions: Array,
  allowedTo: Array,
});

const feedbackSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FeedbackForm",
    },
    answers: Array,
    assigned: Object,
    called: Object,
  },
  { strict: false }
);

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
    link: String,
  })
);

// * GENERATING TOKENS

clientSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, email: this.email, role: "client" },
    config.get("jwt_secret")
  );
  return token;
};

advisorSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, email: this.email, role: "advisor" },
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

const Category = mongoose.model("Category", categorySchema);

const Advisor = mongoose.model("Advisor", advisorSchema);

const Client = mongoose.model("Client", clientSchema);

const Admin = mongoose.model("Admin", adminSchema);

const Booking = mongoose.model("booking", bookingSchema);

const FeedbackForm = mongoose.model("FeedbackForm", feedbackFormSchema);

const Feedback = mongoose.model("Feedback", feedbackSchema);

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
    username: Joi.string()
      .min(5)
      .max(255)
      .required()
      .regex(/[A-Za-z0-9_]/i),
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().required().email(),
    contact: Joi.number().min(8).required(),
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
    contact: Joi.number().min(8).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(255).required(),
    experience: Joi.number().required(),
    sebi_no: Joi.string()
      .regex(/[A-Za-z]{3}[0-9]{9}/i)
      .trim()
      .required()
      .messages({
        "string.pattern.base": "Enter Valid SEBI Registration Number",
      }),
    expertise: Joi.string().required(),
    profile_pic: Joi.string(),
  }).validate(data);
};

const categoryValidate = (data) => {
  return Joi.object({
    slug: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().required(),
    shortDesc: Joi.string(),
  }).validate(data);
};

// * HASHING PASSWORD

async function hash_password(pass) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(pass, salt);
  return hashed;
}

module.exports = {
  Client,
  Category,
  Advisor,
  Admin,
  Page,
  Booking,
  Elearning,
  FeedbackForm,
  Feedback,
  adminValidate,
  categoryValidate,
  advisorValidate,
  clientValidate,
  hash_password,
};
