import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../../utils/constants/images';
import {ReceiverMessageBox} from '../../components/chatComponents/ReceiverMessageBox';
import {SenderMessageBox} from '../../components/chatComponents/Sender';
import {ChatInput} from '../../components/inputs/chatInput';
import {chatbotMessages} from '../../../data/mockups/messages';
import {formatDate} from '../../../utils/helpers/format_date_helper';

type Message = {
  time: string;
  sender: 'user' | 'bot';
  content: string;
};

type ConversationsByDate = {
  [date: string]: Message[];
};

export function ChatBotScreen() {
  const messages = chatbotMessages.conversations_by_date;

  return (
    <View className="flex-1 bg-white p-5 px-6">
      <View className="flex-row items-center">
        <Image className="rounded-full w-24 h-24" source={images.lumiOfc} />
        <View className="ml-3">
          <Text className="text-xl font-bold">
            LUMI - Assistente Virtual I.A
          </Text>
          <Text className="text-base">Online Agora</Text>
        </View>
      </View>
      <FlatList
        data={messages}
        keyExtractor={message => message.date}
        renderItem={({item}) => (
          <View>
            {/* Data centralizada */}
            <Text className="text-center mx-3 text-base">
              {formatDate(item.date)}
            </Text>
            {item.conversations.map((conversation, convIndex) => (
              <View key={`conv-${convIndex}`}>
                {conversation.map((message, msgIndex) => {
                  const MessageComponent =
                    message.sender === 'user'
                      ? SenderMessageBox
                      : ReceiverMessageBox;

                  return (
                    <View key={`msg-${msgIndex}`} className="my-1">
                      <MessageComponent />
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        )}
      />
      <View className="h-16 py-2">
        <View className="flex-row justify-center items-center">
          <View className=" w-[80%]">
            <ChatInput placeholder="Envia uma mensagem ao Lumi" mode="email" />
          </View>
          <TouchableOpacity className="w-[52] h-[52] justify-center rounded-full items-center  bg-primary">
            <Image className="w-9 h-9" source={images.send} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
