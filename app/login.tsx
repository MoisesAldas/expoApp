import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isDark ? ["#0f172a", "#1e293b"] : ["#f8fafc", "#e2e8f0"]}
        style={styles.background}
      />

      {/* Background Decoration */}
      <View
        style={[
          styles.circle,
          { top: -100, left: -100, backgroundColor: "rgba(0, 127, 255, 0.1)" },
        ]}
      />
      <View
        style={[
          styles.circle,
          {
            bottom: -100,
            right: -100,
            backgroundColor: "rgba(0, 127, 255, 0.1)",
          },
        ]}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <BlurView
            intensity={isDark ? 40 : 80}
            tint={isDark ? "dark" : "light"}
            style={styles.card}
          >
            {/* Logo */}
            <View style={styles.logoContainer}>
              <IconSymbol name="sparkles" size={40} color="#007fff" />
            </View>

            {/* Header */}
            <View style={styles.header}>
              <Text
                style={[
                  styles.title,
                  { color: isDark ? "#f1f5f9" : "#0f172a" },
                ]}
              >
                Welcome Back
              </Text>
              <Text style={styles.subtitle}>Sign in to continue</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={[
                    styles.input,
                    { color: isDark ? "#f1f5f9" : "#0f172a" },
                  ]}
                  placeholder="example@email.com"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.labelRow}>
                  <Text style={styles.label}>Password</Text>
                  <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={[
                    styles.input,
                    { color: isDark ? "#f1f5f9" : "#0f172a" },
                  ]}
                  placeholder="••••••••"
                  placeholderTextColor="#94a3b8"
                  secureTextEntry
                />
              </View>

              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log In</Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Logins */}
            <View style={styles.socialContainer}>
              <TouchableOpacity
                style={[
                  styles.socialButton,
                  { backgroundColor: isDark ? "#1e293b" : "#ffffff" },
                ]}
              >
                <IconSymbol
                  name="plus"
                  size={20}
                  color={isDark ? "#f1f5f9" : "#0f172a"}
                />
                <Text
                  style={[
                    styles.socialButtonText,
                    { color: isDark ? "#f1f5f9" : "#0f172a" },
                  ]}
                >
                  Apple
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.socialButton,
                  { backgroundColor: isDark ? "#1e293b" : "#ffffff" },
                ]}
              >
                <IconSymbol name="plus" size={20} color="#ef4444" />
                <Text
                  style={[
                    styles.socialButtonText,
                    { color: isDark ? "#f1f5f9" : "#0f172a" },
                  ]}
                >
                  Google
                </Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.registerLink}>Register</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  circle: {
    position: "absolute",
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: (width * 0.8) / 2,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  card: {
    padding: 32,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  logoContainer: {
    width: 64,
    height: 64,
    backgroundColor: "rgba(0, 127, 255, 0.1)",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
  },
  form: {
    width: "100%",
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    marginLeft: 4,
  },
  forgotPassword: {
    fontSize: 14,
    color: "#007fff",
    fontWeight: "500",
  },
  input: {
    height: 56,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  loginButton: {
    height: 56,
    backgroundColor: "#007fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#007fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 32,
    gap: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
  dividerText: {
    fontSize: 12,
    color: "#94a3b8",
    fontWeight: "600",
    letterSpacing: 1,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
  },
  socialButton: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    marginTop: 40,
  },
  footerText: {
    color: "#64748b",
    fontSize: 14,
  },
  registerLink: {
    color: "#007fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
