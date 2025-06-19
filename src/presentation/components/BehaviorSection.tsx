import React from 'react';
import {View, Text} from 'react-native';
import {RatingIndicator} from './RatingIndicator';
import {
  Heart,
  Shield,
  RotateCcw,
  TriangleAlert as AlertTriangle,
  Users as Users2,
  Clock,
} from 'lucide-react-native';
import {ReviewCard} from './ReviewCard';

interface BehaviorSectionProps {
  behavior: {
    regulation: number;
    respect: number;
    resistance: number;
    challenges: number;
    participation: number;
    punctuality: number;
  };
  className?: string;
}

const behaviorLabels = {
  regulation: 'Regulação Emocional',
  respect: 'Respeito ao Espaço do Outro',
  resistance: 'Resistência às Transições',
  challenges: 'Comportamentos Desafiadores',
  participation: 'Participação Tranquila',
  punctuality: 'Pontualidade na Rotina',
};

const behaviorIcons = {
  regulation: Heart,
  respect: Shield,
  resistance: RotateCcw,
  challenges: AlertTriangle,
  participation: Users2,
  punctuality: Clock,
};

export function BehaviorSection({
  behavior,
  className = '',
}: BehaviorSectionProps) {
  return (
    <ReviewCard className={className}>
      <Text className="text-xl font-bold text-slate-800 mb-1">
        Comportamento
      </Text>
      <Text className="text-sm text-slate-600 mb-5">
        Avaliação dos padrões comportamentais
      </Text>

      <View className="space-y-4">
        {Object.entries(behavior).map(([key, value]) => {
          const IconComponent =
            behaviorIcons[key as keyof typeof behaviorIcons];
          return (
            <View key={key} className="py-2">
              <View className="flex-row items-center mb-2">
                <IconComponent size={20} color="#2E8FE6" />
                <Text className="text-base font-semibold text-gray-700 ml-3 flex-1">
                  {behaviorLabels[key as keyof typeof behaviorLabels]}
                </Text>
              </View>
              <RatingIndicator rating={value} maxRating={3} />
            </View>
          );
        })}
      </View>
    </ReviewCard>
  );
}
