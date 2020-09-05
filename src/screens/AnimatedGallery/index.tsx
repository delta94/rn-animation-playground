import React, { useState, useMemo, useRef } from 'react';
import { ImageStyle } from 'react-native';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';

import FooterButtons, { Option } from '../../components/FooterButtons';

import { Container, Image } from './styles';
import { images } from './data';

const LargeLayout: ImageStyle = {
  minWidth: 140,
  minHeight: 140,
  flex: 1,
};

const SmallLayout: ImageStyle = {
  minWidth: 80,
  minHeight: 80,
};

const transition = (
  <Transition.Change durationMs={400} interpolation="easeInOut" />
);

const AnimatedLayout: React.FC = () => {
  const transitionRef = useRef<TransitioningView>(null);
  const [currentLayout, setCurrentLayout] = useState(LargeLayout);

  const options = useMemo<Option[]>(
    () => [
      {
        text: 'Large',
        onPress: () => {
          transitionRef.current?.animateNextTransition();
          setCurrentLayout(LargeLayout);
        },
      },
      {
        text: 'Small',
        onPress: () => {
          transitionRef.current?.animateNextTransition();
          setCurrentLayout(SmallLayout);
        },
      },
    ],
    [],
  );

  return (
    <>
      <Container
        as={Transitioning.View}
        ref={transitionRef}
        transition={transition}>
        {images.map(({ key, uri }) => (
          <Image
            style={currentLayout}
            key={key}
            source={{ uri }}
            resizeMode="cover"
          />
        ))}
      </Container>
      <FooterButtons options={options} />
    </>
  );
};

export default AnimatedLayout;
