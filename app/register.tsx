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

export default function RegisterScreen() {
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
              <IconSymbol name="sparkles" size={40} color="#fff" />
            </View>

            {/* Header */}
            <View style={styles.header}>
              <Text
                style={[
                  styles.title,
                  { color: isDark ? "#f1f5f9" : "#0f172a" },
                ]}
              >
                Create Account
              </Text>
              <Text style={styles.subtitle}>Join our community today</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>EMAIL ADDRESS</Text>
                <View style={styles.inputWrapper}>
                  <IconSymbol
                    name="chevron.right"
                    size={20}
                    color="#94a3b8"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={[
                      styles.input,
                      { color: isDark ? "#f1f5f9" : "#0f172a" },
                    ]}
                    placeholder="name@example.com"
                    placeholderTextColor="#94a3b8"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>PASSWORD</Text>
                <View style={styles.inputWrapper}>
                  <IconSymbol
                    name="chevron.right"
                    size={20}
                    color="#94a3b8"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={[
                      styles.input,
                      { color: isDark ? "#f1f5f9" : "#0f172a" },
                    ]}
                    placeholder="Create a password"
                    placeholderTextColor="#94a3b8"
                    secureTextEntry
                  />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>CONFIRM PASSWORD</Text>
                <View style={styles.inputWrapper}>
                  <IconSymbol
                    name="chevron.right"
                    size={20}
                    color="#94a3b8"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={[
                      styles.input,
                      { color: isDark ? "#f1f5f9" : "#0f172a" },
                    ]}
                    placeholder="Repeat your password"
                    placeholderTextColor="#94a3b8"
                    secureTextEntry
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
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
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text style={styles.loginLink}>Log In</Text>
              </TouchableOpacity>
            </View>
          </BlurView>

          {/* System style footer */}
          <View style={styles.systemFooter}>
            <TouchableOpacity>
              <Text style={styles.systemFooterLink}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.systemFooterLink}>Terms of Service</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#007fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#007fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
    fontWeight: "500",
  },
  form: {
    width: "100%",
    gap: 16,
  },
  inputContainer: {
    gap: 6,
  },
  label: {
    fontSize: 10,
    fontWeight: "700",
    color: "#94a3b8",
    marginLeft: 4,
    letterSpacing: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    height: 56,
  },
  inputIcon: {
    marginLeft: 16,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    fontSize: 16,
  },
  registerButton: {
    height: 56,
    backgroundColor: "#007fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#007fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  registerButtonText: {
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
    fontSize: 10,
    color: "#94a3b8",
    fontWeight: "700",
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
    fontWeight: "500",
  },
  loginLink: {
    color: "#007fff",
    fontSize: 14,
    fontWeight: "600",
  },
  systemFooter: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginTop: 32,
    marginBottom: 16,
  },
  systemFooterLink: {
    fontSize: 10,
    color: "#94a3b8",
    fontWeight: "600",
    letterSpacing: 1,
  },
});
