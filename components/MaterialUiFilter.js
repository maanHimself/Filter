import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ListItemButton,
  ListItemText,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Container } from "@mui/material";
import { Collapse } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { CoPresent, ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";
import { color, fontFamily, sizeWidth } from "@mui/system";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgrey",
      borderWidth: 1,
      borderRadius: 5,
    },
    "&:hover fieldset": {
      borderColor: "lightgrey",
      borderWidth: 1,
      // borderRadius: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: 2,
    },
  },
});

const CssButton = styled(Button)({
  "&:hover": {
    color: "white",
    backgroundColor: "black",
    borderColor: "transparent",
    boxShadow: "none",
  },
  "&": {
    color: "black",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: "lightgrey",
    backgroundColor: "white",
    boxShadow: "none",
    display: "inline-block",
  },
});

const TextFieldCustom = ({ register, id }) => {
  return (
    <CssTextField
      {...register(id)}
      placeholder="0.00"
      size="small"
      sx={{ m: 1, padding: "0ch", margin: "0ch", marginBottom: "0.5ch" }}
      fullWidth={true}
      InputProps={{
        style: { fontSize: 12 },
        endAdornment: (
          <InputAdornment
            position="end"
            edge="end"
            disableTypography={false}
            sx={{ fontSize: 15 }}
            style={{
              marginRight: "-10px",
              marginLeft: "1px",
            }}
          >
            ETH
          </InputAdornment>
        ),
      }}
    />
  );
};

export default function Filter(props) {
  const { register, handleSubmit, getValues } = useForm({});
  const onSubmit = () => console.log(getValues());
  const [open0, setOpen0] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [availability, setAvailability] = useState(getValues().Availability);

  const handleClick = (i) => {
    if (i == 0) setOpen0(!open0);
    else if (i == 1) setOpen1(!open1);
    else if (i == 2) setOpen2(!open2);
    else if (i == 3) setOpen3(!open3);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <List sx={{ maxWidth: 250, marginLeft: "7px" }}>
          <ListItemButton onClick={() => handleClick(0)}>
            <ListItemText primary="Price range" />
            {open0 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open0} timeout="auto" unmountOnExit={false}>
            <ListItem
              sx={{
                padding: "0px 0px 0px 0px",
              }}
            >
              <TextFieldCustom register={register} id="start" />
              <div style={{ padding: "2px" }} />
              <TextFieldCustom register={register} id="end" />
            </ListItem>
            <ListItem
              sx={{
                padding: "0px 0px 0px 0px",
              }}
            >
              <CssButton
                type="submit"
                variant="contained"
                style={{
                  margin: "0ch",
                  // color: "black",
                  // backgroundColor:"black"
                }}
                sx={
                  {
                    // color:"red"
                  }
                }
                fullWidth={true}
              >
                Set price
              </CssButton>
            </ListItem>
          </Collapse>

          <ListItemButton onClick={() => handleClick(1)}>
            <ListItemText primary="Availability" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit={false}>
            <RadioGroup onChange={(e) => setAvailability(e.target.value)}>
              <FormControlLabel
                control={
                  <Radio
                    value={"All"}
                    {...register("Availability", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      paddingLeft: 0.4,
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                sx={{
                  margin: "1px 1px 10px 0px",
                  padding: "0px 0px 0px 0px",
                  borderRadius: 1,
                  border: "solid",
                  borderWidth: 0.3,
                  borderColor: "lightgray",
                }}
                label="All"
                labelPlacement="end"
              />
              <Box
                sx={{
                  margin: "1px 1px 10px 0px",
                  padding: "0px 0px 0px 5px",
                  borderRadius: 1,
                  border: "solid",
                  borderWidth: 0.3,
                  borderColor: "lightgray",
                }}
              >
                <FormControlLabel
                  control={
                    <Radio
                      value={"Available"}
                      {...register("Availability", {
                        onChange: (e) => {
                          handleSubmit(onSubmit());
                          onSubmit();
                        },
                      })}
                      sx={{
                        "&": {
                          color: "black",
                        },
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label="Available"
                  labelPlacement="end"
                />
                <Collapse
                  in={getValues().Availability == "Available"}
                  timeout="auto"
                  unmountOnExit
                >
                  <FormControlLabel
                    value={true}
                    control={
                      <Checkbox
                        value={true}
                        {...register("Reserve not met", {
                          onChange: (e) => onSubmit(),
                        })}
                        sx={{
                          "&": {
                            color: "black",
                          },
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                    }
                    label="Reserve not met"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value={true}
                    control={
                      <Checkbox
                        value={true}
                        {...register("Live auction", {
                          onChange: (e) => onSubmit(),
                        })}
                        sx={{
                          "&": {
                            color: "black",
                          },
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                    }
                    label="Live auction"
                    labelPlacement="end"
                  />
                </Collapse>
              </Box>
              <FormControlLabel
                control={
                  <Radio
                    value={"Sold"}
                    {...register("Availability", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      paddingLeft: 0.4,
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                sx={{
                  margin: "1px 1px 10px 0px",
                  padding: "0px 0px 0px 0px",
                  borderRadius: 1,
                  border: "solid",
                  borderWidth: 0.3,
                  borderColor: "lightgray",
                }}
                label="Sold"
                labelPlacement="end"
              />
            </RadioGroup>
          </Collapse>

          <ListItemButton onClick={() => handleClick(2)}>
            <ListItemText primary="Market" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit={false}>
            <ListItem
              sx={{
                margin: "1px 1px 10px 0px",
                padding: "0px 0px 0px 5px",
                height: "40px",
                borderRadius: 1,
                border: "solid",
                border: "solid",
                borderWidth: 0.3,
                borderColor: "lightgray",
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              <FormControlLabel
                value={true}
                control={
                  <Checkbox
                    value={true}
                    {...register("Primary", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Primary"
                labelPlacement="end"
              />
            </ListItem>
            <ListItem
              sx={{
                margin: "1px 1px 10px 0px",
                padding: "0px 0px 0px 5px",
                height: "40px",
                borderRadius: 1,
                border: "solid",
                border: "solid",
                borderWidth: 0.3,
                borderColor: "lightgray",
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              <FormControlLabel
                value={true}
                control={
                  <Checkbox
                    value={true}
                    {...register("Secondary", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Secondary"
                labelPlacement="end"
              />
            </ListItem>
          </Collapse>
          <ListItemButton onClick={() => handleClick(3)}>
            <ListItemText primary="Type" />
            {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open3} timeout="auto" unmountOnExit={false}>
            <ListItem
              sx={{
                margin: "1px 1px 10px 0px",
                padding: "0px 0px 0px 5px",
                height: "40px",
                borderRadius: 1,
                border: "solid",
                border: "solid",
                borderWidth: 0.3,
                borderColor: "lightgray",
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              <FormControlLabel
                value={true}
                control={
                  <Checkbox
                    value={true}
                    {...register("3D", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="3D"
                labelPlacement="end"
              />
            </ListItem>
            <ListItem
              sx={{
                margin: "1px 1px 10px 0px",
                padding: "0px 0px 0px 5px",
                height: "40px",
                borderRadius: 1,
                border: "solid",
                border: "solid",
                borderWidth: 0.3,
                borderColor: "lightgray",
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              <FormControlLabel
                value={true}
                control={
                  <Checkbox
                    value={true}
                    {...register("Image", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Image"
                labelPlacement="end"
              />
            </ListItem>
            <ListItem
              sx={{
                margin: "1px 1px 10px 0px",
                padding: "0px 0px 0px 5px",
                height: "40px",
                borderRadius: 1,
                border: "solid",
                border: "solid",
                borderWidth: 0.3,
                borderColor: "lightgray",
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              <FormControlLabel
                value={true}
                control={
                  <Checkbox
                    value={true}
                    {...register("Model", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Model"
                labelPlacement="end"
              />
            </ListItem>
            <ListItem
              sx={{
                margin: "1px 1px 10px 0px",
                padding: "0px 0px 0px 5px",
                height: "40px",
                borderRadius: 1,
                border: "solid",
                border: "solid",
                borderWidth: 0.3,
                borderColor: "lightgray",
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              <FormControlLabel
                value={true}
                control={
                  <Checkbox
                    value={true}
                    {...register("Video", {
                      onChange: (e) => onSubmit(),
                    })}
                    sx={{
                      "&": {
                        color: "black",
                      },
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Video"
                labelPlacement="end"
              />
            </ListItem>
          </Collapse>
        </List>
      </form>
      <style jsx>{``}</style>
    </div>
  );
}
