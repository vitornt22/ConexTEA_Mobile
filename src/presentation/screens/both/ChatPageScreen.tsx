import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {ChatInput} from '../../components/inputs/chatInput';
import Icon from '@react-native-vector-icons/fontawesome6';
import {images} from '../../../utils/constants/images';
import {formatDate} from '../../../utils/helpers/format_date_helper';
import {SenderMessageBox} from '../../components/chatComponents/Sender';
import {ReceiverMessageBox} from '../../components/chatComponents/ReceiverMessageBox';
import {chatbotMessages} from '../../../data/mockups/messages';
import {useEffect, useRef} from 'react';

export function ChatPageScreen() {
  const messages = chatbotMessages.conversations_by_date;
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Dá um tempinho para o FlatList renderizar
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({animated: true});
    }, 100);
  }, []);

  return (
    <View className="flex-1 bg-white p-5 px-6">
      <View className="flex-row items-center">
        <Image className="rounded-full w-24 h-24" source={images.avatar1} />
        <View className="ml-3">
          <Text className="text-xl font-bold">Maria Andrade</Text>

          <Text className="text-base">Mãe da Valentina</Text>
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={message => message.date}
        renderItem={({item}) => (
          <View>
            {/* Data centralizada */}
            <Text className="text-center mx-3 text-base">
              {formatDate(item.date)}
            </Text>
            {item.conversations.map((conversation: any, convIndex: any) => (
              <View key={`conv-${convIndex}`}>
                {conversation.map((message: any, msgIndex: number) => {
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
          <TouchableOpacity className="w-[32] h-[32] justify-center rounded-full items-center  bg-primary">
            <Image className="w-5 h-5" source={images.send} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-2 w-[32] h-[32] justify-center rounded-full items-center  bg-primary">
            <Icon color={'white'} name="microphone" iconStyle="solid" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
