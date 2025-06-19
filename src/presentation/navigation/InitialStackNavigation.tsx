import {createStackNavigator} from '@react-navigation/stack';
import {InitialScreen} from '../screens/both/InitialScreen';
import {InitialScreenHeader} from '../components/headers/InitialScreenHeader';
import {BottomNavigationParentsScreen} from './BottomNavigationParentsScreen';
import {BottomNavigationTeacherScreen} from './BottomNavigationTeacherScreen';
import {LoginScreen} from '../screens/both/LoginScreen';
import {ChatBotScreen} from '../screens/both/ChatBotScreen';
import {AssessmentsScreen} from '../screens/both/graphScreens/AssessmentsScreen';
import {EvolutionScreen} from '../screens/both/graphScreens/EvolutionScreen';
import {EducationalPlanScreen} from '../screens/both/graphScreens/EducationalPlanScreen';
import {ActivitiesScreen} from '../screens/both/graphScreens/ActivitiesScreen';
import {PeriodicReportsScreen} from '../screens/both/PeriodicReportsScreen';
import {ChatBotIconButton} from '../components/chatBotIconButton';
import {RootStackParamList} from './types';
import {CustomReportScreen} from '../screens/both/CustomReportScreen';
import AssessmentViewScreen from '../screens/both/ReviewScreens/AssessmentViewScreen';
import ActivityViewScreen from '../screens/both/ReviewScreens/ActivityViewScreen';
import CheckInViewScreen from '../screens/both/ReviewScreens/CheckInViewScreen';
import ActionViewScreen from '../screens/both/ReviewScreens/ActionViewScreen';
import {ParentsChatScreen} from '../screens/both/ParentsChatScreen';
import {TeachersChatScreen} from '../screens/both/TeachersChatScreen';
import {TeacherCheckInView} from '../screens/teachers/FormScreens/TeacherCheckInView';
import {TeacherActivitieView} from '../screens/teachers/FormScreens/TeacherActivitieView';
import {StudentProfile} from '../screens/both/StudentProfile';
import {TeacherActionView} from '../screens/teachers/FormScreens/TeacherActionView';
import TeacherAssessmentScreen from '../screens/teachers/FormScreens/TeacherAssessmentScreen';

const Stack = createStackNavigator<RootStackParamList>();

export function InitialStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{header: () => <InitialScreenHeader />}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
        initialParams={{screenRoute: 'teacher'}}
      />
      <Stack.Screen
        name="parents"
        component={BottomNavigationParentsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="teacher"
        component={BottomNavigationTeacherScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="chatParent" component={ParentsChatScreen} />
      <Stack.Screen name="chatTeachers" component={TeachersChatScreen} />

      <Stack.Screen
        name="chatbot"
        component={ChatBotScreen}
        options={{
          title: 'Suporte I.A',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="assessments"
        component={AssessmentsScreen}
        options={{
          title: 'Avaliações',
          headerRight: () => <ChatBotIconButton />,
        }}
      />

      <Stack.Screen
        name="evolution"
        component={EvolutionScreen}
        options={{
          title: 'Evolução',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="PEI"
        component={EducationalPlanScreen}
        options={{title: 'PEI', headerRight: () => <ChatBotIconButton />}}
      />
      <Stack.Screen
        name="activities"
        component={ActivitiesScreen}
        options={{
          title: 'Atividades',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="periodicReports"
        component={PeriodicReportsScreen}
        options={{
          title: 'Relátorios PEI',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="customReport"
        component={CustomReportScreen}
        options={{
          title: 'Relatório Personalizado',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="assessmentView"
        component={AssessmentViewScreen}
        options={{
          title: 'Ver Avaliação',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="activityView"
        component={ActivityViewScreen}
        options={{
          title: 'Ver Atividade',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="checkInView"
        component={CheckInViewScreen}
        options={{
          title: 'Ver Check-In ',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      <Stack.Screen
        name="actionView"
        component={ActionViewScreen}
        options={{
          title: 'Ver Ações ',
          headerRight: () => <ChatBotIconButton />,
        }}
      />
      {/* Teacher Screens */}
      <Stack.Screen
        name="teacherAssessment"
        component={TeacherAssessmentScreen}
        options={{
          title: 'Realizar Avaliação',
        }}
      />
      <Stack.Screen
        name="teacherCheckInView"
        component={TeacherCheckInView}
        options={{
          title: 'Realizar Check-In Emocional',
        }}
      />
      <Stack.Screen
        name="teacherActivitieView"
        component={TeacherActivitieView}
        options={{
          title: 'Cadastrar Atividade',
        }}
      />
      <Stack.Screen
        name="teacherActionView"
        component={TeacherActionView}
        options={{
          title: 'Mapear desejo do Aluno',
        }}
      />
      <Stack.Screen
        name="studentProfile"
        component={StudentProfile}
        options={{
          title: 'Perfil do Estudante',
        }}
      />
    </Stack.Navigator>
  );
}
