// Admin Pages
import Clients from "./adminPages/clients";
import Advisors from "./adminPages/advisors";
import { Pages, AddPage } from "./adminPages/pages";
import AdminBookings from "./adminPages/bookings";
import AdminClientProfile from "./adminPages/clientProfile";
import AdminAdvisor from "./adminPages/advisor";
import { AddFeedbackForm, FeedbackForms } from "./adminPages/addFeedbackForm";
import {
  FormFeedbacks,
  AdminFeedbacks,
  SingleFeedback as AdminSingleFeedback,
} from "./adminPages/allFeedbacks";
import HomePageEdit from "./adminPages/homepage";

// Advisor Pages
import AdvisorProfile, { CompleteProfile } from "./advisorPages/profile";
import AdvisorBookings from "./advisorPages/bookings";
import AdvisorClientProfile from "./advisorPages/clientProfile";
import AdvisorDashboard from "./advisorPages/dashboard";
import { AssignedLeads, AdvSingleFeedback } from "./advisorPages/assignedleads";

// Client Pages
import ClientProfile from "./clientPages/profile";
import ClientPersonal from "./clientPages/personal";
import ClientInvestment from "./clientPages/investments";
import ClientIncome from "./clientPages/income";
import ClientExpense from "./clientPages/expenses";
import ClientGoal from "./clientPages/goals";
import ClientBookings from "./clientPages/bookings";
import ClientInsurances from "./clientPages/insurances";
import ClientSheet from "./clientPages/sheet";
// import {
//   Feedbacks as ClientFeedbacks,
//   SingleFeedback,
// } from "./clientPages/feedbacks";
import ClientDashboard from "./clientPages/dashboard";
import ClientLiability from "./clientPages/liabilities";
import ClientAsset from "./clientPages/assets";
import { AdminCategories, AdminSingleCategory } from "./adminPages/categories";

export const routes = {
  admin: [
    {
      path: "/admin/advisors",
      name: "Advisors",
      component: Advisors,
      onMenu: true,
    },
    {
      path: "/admin/categories/:slug",
      name: "Single Categories",
      component: AdminSingleCategory,
      onMenu: false,
    },
    {
      path: "/admin/feedbacks",
      name: "All Feedbacks",
      component: AdminFeedbacks,
      onMenu: true,
    },
    {
      path: "/admin/categories",
      name: "Advisor Categories",
      component: AdminCategories,
      onMenu: true,
    },
    {
      path: "/admin/advisor/:id",
      name: "Advisor",
      component: AdminAdvisor,
      onMenu: false,
    },
    {
      path: "/admin/client/:id",
      name: "Client Profile",
      component: AdminClientProfile,
      onMenu: false,
    },
    {
      path: "/admin/clients",
      name: "Clients",
      component: Clients,
      onMenu: true,
    },
    {
      path: "/admin/feedbackforms",
      name: "Feedback Forms",
      component: FeedbackForms,
      onMenu: true,
    },
    {
      path: "/admin/addfeedbackform",
      name: "Add Feedback Form",
      component: AddFeedbackForm,
      onMenu: true,
    },
    {
      path: "/admin/allfeedbacks/:id",
      name: "All Feedbacks",
      component: FormFeedbacks,
      onMenu: false,
    },
    {
      path: "/admin/feedback/:id",
      name: "All Feedbacks",
      component: AdminSingleFeedback,
      onMenu: false,
    },
    {
      path: "/admin/pages",
      name: "Pages",
      component: Pages,
      onMenu: true,
    },
    {
      path: "/admin/editpage/:slug",
      name: "Edit Pages",
      component: AddPage,
      onMenu: false,
    },
    {
      path: "/admin/addpage",
      name: "Add Page",
      component: AddPage,
      onMenu: true,
    },
    {
      path: "/admin/bookings",
      name: "Bookings",
      component: AdminBookings,
      onMenu: true,
    },
    {
      path: "/admin/homepage",
      name: "Home Page Edit",
      component: HomePageEdit,
      onMenu: false,
    },
  ],
  advisor: [
    {
      path: "/advisor",
      name: "Dashboard",
      component: AdvisorDashboard,
      onMenu: true,
    },
    {
      path: "/advisor/profile",
      name: "Profile",
      component: AdvisorProfile,
      onMenu: true,
    },
    {
      path: "/advisor/completeprofile",
      name: "Complete Profile",
      component: CompleteProfile,
      onMenu: false,
    },
    {
      path: "/advisor/feedback/:id",
      name: "Single Feedback",
      component: AdvSingleFeedback,
      onMenu: false,
    },
    {
      path: "/advisor/booking/:booking_id/:id",
      name: "Client Profile",
      component: AdvisorClientProfile,
      onMenu: false,
    },
    {
      path: "/advisor/client/:booking_id/:id",
      name: "Client Profile",
      component: AdvisorClientProfile,
      onMenu: false,
    },
    {
      path: "/advisor/booking",
      name: "Recommendation",
      component: AdvisorBookings,
      onMenu: true,
    },
    {
      path: "/advisor/assignedleads",
      name: "Assigned Leads",
      component: AssignedLeads,
      onMenu: true,
    },
  ],
  client: [
    {
      path: "/client",
      name: "Dashboard",
      component: ClientDashboard,
      onMenu: true,
    },
    {
      path: "/client/profile",
      name: "Profile",
      component: ClientProfile,
      onMenu: true,
    },
    {
      path: "/client/sheet",
      name: "Finance Sheet",
      component: ClientSheet,
      onMenu: false,
    },
    {
      path: "/client/booking",
      name: "Booking",
      component: ClientBookings,
      onMenu: true,
    },
    // {
    //   path: "/client/feedback",
    //   name: "feedbacks",
    //   component: ClientFeedbacks,
    //   onMenu: false,
    // },
    // {
    //   path: "/client/feedback/:id",
    //   name: "Single Feedback",
    //   component: SingleFeedback,
    //   onMenu: false,
    // },
    {
      path: "/client/personal",
      name: "Personal",
      component: ClientPersonal,
      onMenu: true,
    },
    {
      path: "/client/investment",
      name: "Investments",
      component: ClientInvestment,
      onMenu: true,
    },
    {
      path: "/client/insurance",
      name: "Insurance",
      component: ClientInsurances,
      onMenu: true,
    },
    {
      path: "/client/income",
      name: "Income",
      component: ClientIncome,
      onMenu: true,
    },
    {
      path: "/client/expense",
      name: "Expenses",
      component: ClientExpense,
      onMenu: true,
    },
    {
      path: "/client/asset",
      name: "Asset",
      component: ClientAsset,
      onMenu: true,
    },
    {
      path: "/client/liability",
      name: "Liability",
      component: ClientLiability,
      onMenu: true,
    },
    {
      path: "/client/goal",
      name: "Goal",
      component: ClientGoal,
      onMenu: true,
    },
  ],
};
