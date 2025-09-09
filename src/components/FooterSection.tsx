import React from "react";
import {
    Box,
    Grid,
    Typography,
    Container,
    Link,
    IconButton,
    Button,
    InputBase,
    Paper,
    Stack
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowUpImg from "../assets/mingcute_arrow-up-line.png";
import CVSLogoImg from "../assets/footer_cvs_logo.png";

// TwitterX SVG Icon
const TwitterXIcon: React.FC = () => (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.1 2H21.4025L14.1125 10.2536L22.6632 22H16.2042L10.9695 15.0114L4.97779 22H0.6726L8.38867 13.2268L0.119141 2H6.73336L11.4871 8.41057L17.1 2ZM16.0346 20.0887H17.7977L6.79774 3.81441H4.91137L16.0346 20.0887Z"
            fill="currentColor"
        />
    </svg>
);

const FooterSection: React.FC = () => (
    <Box
        sx={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#13416b",
            color: "#fff",
            pt: 8,
            pb: 4,
            mt: 12,
            width: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
        <Container maxWidth="lg" sx={{ px: { xs: 1, md: 2 }, width: "100%" }}>
            {/* Newsletter */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
                <Typography
                    variant="h5"
                    sx={{
                        color: "#ff7e59",
                        fontWeight: 700,
                        fontFamily: "'Earth Orbiter','Montserrat',sans-serif",
                        letterSpacing: 2,
                        textTransform: "uppercase"
                    }}
                >
                    GET THE LATEST UPDATES,<br />TIPS & INSIGHTS
                </Typography>
                <Paper
                    sx={{
                        pl: 2,
                        bgcolor: "#f4faff",
                        borderRadius: "30px",
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "none",
                        maxWidth: 400,
                        pr: 1,
                    }}
                    component="form"
                    onSubmit={e => { e.preventDefault(); }}
                >
                    <InputBase
                        sx={{ flex: 1, fontSize: 16, color: "#13416b" }}
                        placeholder="Enter Email ID"
                        inputProps={{ "aria-label": "Enter Email ID" }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            borderRadius: "30px",
                            px: 3,
                            py: 1.2,
                            ml: 1.2,
                            fontWeight: 700,
                            fontFamily: "'Earth Orbiter','Montserrat',sans-serif",
                            textTransform: "uppercase",
                            bgcolor: "#ff7e59",
                            "&:hover": { bgcolor: "#e55e36" },
                            minWidth: 100,
                            boxShadow: "none"
                        }}
                        endIcon={
                            <img
                                src={ArrowUpImg}
                                alt="Arrow Up"
                                width={22}
                                height={22}
                                style={{ display: "block" }}
                            />
                        }
                    >
                        SEE ALL
                    </Button>
                </Paper>
            </Box>

            {/* Main footer card container */}
            <Box sx={{
                mt: 6,
                p: { xs: 3, md: 6 },
                bgcolor: "rgba(34,69,110,0.90)",
                borderRadius: "32px",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                boxShadow: "0 8px 60px rgba(0,0,0,0.10)"
            }}>
                {/* Left: Logo, desc, socials */}
                <Box
                    sx={{
                        minWidth: 280,
                        borderRadius: "24px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    {/* CVS Logo */}
                    <Box
                        component="img"
                        src={CVSLogoImg}
                        alt="CVS Logo"
                        sx={{
                            height: 60,
                            width: "auto",
                            mb: 2.5,
                        }}
                    />

                    {/* Description */}
                    <Typography sx={{
                        fontSize: 17,
                        color: "#fff",
                        textAlign: "center",
                        lineHeight: 1.5,
                        fontWeight: 400,
                        maxWidth: 330,
                        mb: 3,
                        letterSpacing: 0.1,
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae hendrerit lectus.<br />
                        Praesent vitae consequat mi. Maecenas auctor sed sapien ut bibendum. Nam in viverra justo.
                    </Typography>

                    {/* Social Icons Centered */}
                    <Stack direction="row" spacing={3} justifyContent="center">
                        <IconButton sx={{ bgcolor: "#ff7e59", color: "#fff", "&:hover": { bgcolor: "#fb976e" }, width: 44, height: 44, borderRadius: "50%" }}>
                            <FacebookIcon fontSize="medium" />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "#ff7e59", color: "#fff", "&:hover": { bgcolor: "#fb976e" }, width: 44, height: 44, borderRadius: "50%" }}>
                            <InstagramIcon fontSize="medium" />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "#ff7e59", color: "#fff", "&:hover": { bgcolor: "#fb976e" }, width: 44, height: 44, borderRadius: "50%" }}>
                            <LinkedInIcon fontSize="medium" />
                        </IconButton>
                        <IconButton sx={{ bgcolor: "#ff7e59", color: "#fff", "&:hover": { bgcolor: "#fb976e" }, width: 44, height: 44, borderRadius: "50%" }}>
                            <TwitterXIcon />
                        </IconButton>
                    </Stack>
                </Box>

                {/* Right: info columns */}
                <Grid container spacing={0} sx={{ flex: "2 1 0", minWidth: 0 }}>
                    <Grid component="div">
                        <Typography variant="subtitle1" sx={{
                            fontWeight: 700, mb: 1, letterSpacing: 1.2, color: "#fff", fontFamily: "'Orbitron',sans-serif"
                        }}>
                            MENU
                        </Typography>
                        <Stack spacing={0.6} sx={{ mb: 2 }}>
                            {["Home", "About Us", "Services", "Reviews", "Portfolio", "Blog", "Contact"].map(label => (
                                <Link href="#" key={label} underline="none" sx={{
                                    color: "#cae0ff", fontSize: 15, "&:hover": { color: "#fff" },
                                    fontWeight: 500
                                }}>
                                    {label}
                                </Link>
                            ))}
                        </Stack>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1.2, color: "#fff", fontFamily: "'Orbitron',sans-serif" }}>
                            PARTNERS
                        </Typography>
                        {/* Add logos if available */}
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <Box sx={{ bgcolor: "#fff", borderRadius: 1, p: "2px 6px", color: "#13416b", fontSize: 13 }}>
                                PNC BANK
                            </Box>
                            <Box sx={{ bgcolor: "#fff", borderRadius: 1, p: "2px 6px", color: "#13416b", fontSize: 13 }}>
                                CENTURY
                            </Box>
                        </Box>
                    </Grid>

                    <Grid component="div">
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1.2, color: "#fff", fontFamily: "'Orbitron',sans-serif" }}>
                            IMPORTANT
                        </Typography>
                        <Stack spacing={0.6} sx={{ mb: 2 }}>
                            {["Refund Policy", "Privacy Policy", "Terms & Conditions", "Careers at CVS"].map(label => (
                                <Link href="#" key={label} underline="none" sx={{ color: "#cae0ff", fontSize: 15, "&:hover": { color: "#fff" }, fontWeight: 500 }}>
                                    {label}
                                </Link>
                            ))}
                        </Stack>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1.2, color: "#fff", fontFamily: "'Orbitron',sans-serif" }}>
                            CONTACT
                        </Typography>
                        <Stack spacing={0.6}>
                            <Typography sx={{ color: "#cae0ff", fontSize: 15, display: "flex", alignItems: "center", gap: 0.5 }}>
                                <PhoneIcon fontSize="small" />
                                <Box component="span" sx={{ display: "inline-block" }}>+1 323-234-5812</Box>
                            </Typography>
                            <Typography sx={{ color: "#cae0ff", fontSize: 15, display: "flex", alignItems: "center", gap: 0.5 }}>
                                <EmailIcon fontSize="small" />
                                <Box component="span" sx={{ display: "inline-block" }}>example@gmail.com</Box>
                            </Typography>
                            <Typography sx={{ color: "#cae0ff", fontSize: 15, display: "flex", alignItems: "center", gap: 0.5 }}>
                                <LocationOnIcon fontSize="small" />
                                <Box component="span" sx={{ display: "inline-block" }}>Lorem ipsum dolor sit amet, consectetur</Box>
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid component="div">
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1.2, color: "#fff", fontFamily: "'Orbitron',sans-serif" }}>
                            BUSINESS
                        </Typography>
                        <Typography sx={{ color: "#cae0ff", fontSize: 15, lineHeight: 1.65, mb: 2 }}>
                            Monday - Friday :<br /> 10:00 PST to 5:00 PST<br />Saturday & Sunday :<br />Fixed Off
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, letterSpacing: 1.2, color: "#fff", fontFamily: "'Orbitron',sans-serif" }}>
                            PAYMENT
                        </Typography>
                        <Button sx={{
                            background: "linear-gradient(90deg, #e86d3a 0%, #c8462b 100%)",
                            color: "#fff", fontSize: 13, borderRadius: "18px", fontWeight: 600,
                            p: "4px 20px", minWidth: "12px", mb: 1, boxShadow: 1, whiteSpace: "nowrap",
                            "&:hover": { background: "linear-gradient(90deg, #c8462b 0%, #e86d3a 100%)" }
                        }}>
                            PAY NOW!
                        </Button>
                        <Box sx={{ mt: 2, display: "flex", gap: 1.5 }}>
                            <Box sx={{
                                width: 34, height: 18, borderRadius: "5px",
                                background: "#88de97", display: "inline-block"
                            }} />
                            <Box sx={{
                                width: 34, height: 18, borderRadius: "5px",
                                background: "#89bbe0", display: "inline-block"
                            }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                mt: 3, pb: 1.5, pt: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderTop: "1px solid #235784",
                color: "#7ba8d9",
                fontSize: 15
            }}>
                <span>2025 All rights reserved</span>
                <span>Designed by Code Visionary Services</span>
            </Box>
        </Container>
    </Box>
);

export default FooterSection;
