import { useForm, Controller } from "react-hook-form";

import BackgroundImf from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input, Button } from "@components/index";
import Strings from "@config/strings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@hooks/redux";
import { PublicPage } from "@routes/public.routes";
import { setIsLogged } from "@store/features/user/userAuth.slice";
import { setUser } from "@store/features/user/userDetails.slice";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { z } from "zod";

const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3),
});

type SignUpFormType = z.infer<typeof signUpFormSchema>;

const SignUp: PublicPage<"SignUp"> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormType>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (values: SignUpFormType) => {
    dispatch(setUser(values));
    dispatch(setIsLogged(true));
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex="1" bg="gray.700" px={10} pb={16}>
        <Image
          source={BackgroundImf}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            {Strings.screens.SignUp.title}
          </Text>
        </Center>

        <Center>
          <Heading fontSize="xl" mb={6} fontFamily="heading" color="gray.100">
            {Strings.screens.SignUp.subtitle}
          </Heading>

          <Controller
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                keyboardType="default"
                autoCapitalize="words"
                placeholder="Nome"
                error={errors.name?.message}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="E-email"
                error={errors.email?.message}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Senha"
                type="password"
                secureTextEntry
                autoCapitalize="none"
                error={errors.password?.message}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name="password"
          />

          <Button
            onPress={handleSubmit(onSubmit)}
            title={Strings.screens.SignUp.signUpButton}
          />
        </Center>

        <Center mt={24}>
          <Button
            onPress={() => navigation.navigate("SignIn")}
            title={Strings.screens.SignUp.footerButton}
            variant="outline"
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};

export default SignUp;
