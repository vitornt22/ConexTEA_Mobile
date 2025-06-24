import { StackNavigationProp } from "@react-navigation/stack";
import { ReviewItemModel } from "../../models/ReviewItem";
import { RouteProp } from "@react-navigation/native";
import { Student } from "../../models/ParentModel";

export type NavigationProp = StackNavigationProp<RootStackParamList>;
export type LoginRouteProp = RouteProp<RootStackParamList, 'Login'>;


export type RootStackParamList = {
  Initial: undefined;
  Login: { screenRoute: string };
  parents: undefined;
  teacher: undefined;
  chatbot: undefined;
  assessments: undefined;
  evolution: undefined;
  PEI: undefined;
  activities: undefined;
  periodicReports: undefined;
  customReport: {
    text:string, 
    reportName:string
  };
  AllReviews: {type: string};
  CustomReportScreen: {
      text: string;
      reportName: string;
    };
  assessmentView:{
    item:ReviewItemModel
  },
  activityView:{
    item:ReviewItemModel
  },
  checkInView:{
    item:ReviewItemModel
  }
  actionView:{
    item:ReviewItemModel
  }
  chatParent:undefined
  chatTeachers: undefined;
  // Teacher screens below
  teacherAssessment:undefined
  teacherCheckInView:undefined
  teacherActivitieView:undefined
  teacherActionView:undefined
  studentProfile:{student:Student}
  chatPage:undefined
};