import {
  Select as BaseSelect,
  SelectProps,
  selectClasses,
  SelectRootSlotProps,
} from "@mui/base/Select";
import { Option as BaseOption, optionClasses } from "@mui/base/Option";
import { styled } from "@mui/system";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { ForwardedRef, forwardRef } from "react";
import { crimsonPro, workSans } from "../../app/fonts";

const Select = forwardRef(function Select<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectProps<TValue, Multiple>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const slots: SelectProps<TValue, Multiple>["slots"] = {
    root: CustomButton,
    listbox: Listbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple> & React.RefAttributes<HTMLButtonElement>
) => JSX.Element;

export interface ComboboxItem {
  value: string | number;
  name: string | number;
}

interface ComboboxProps {
  items: ComboboxItem[];
  className?: string;
  defaultValue?: string | number;
  onChange: (event: any, value: any) => void;
}

export default function Combobox(props: ComboboxProps) {
  return (
    <Select
      className={props.className}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {props.items.map((item, index) => (
        <Option value={item.value} key={`combobox-${index}-${item.name}`}>
          {item.name}
        </Option>
      ))}
    </Select>
  );
}

const CustomButton = forwardRef(function CustomButton<
  TValue extends {},
  Multiple extends boolean,
>(
  props: SelectRootSlotProps<TValue, Multiple>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <StyledButton type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </StyledButton>
  );
});

const StyledButton = styled("button", { shouldForwardProp: () => true })(
  () => `
  position: relative;
  font-family: ${crimsonPro.style};
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 175px;
  padding: 4px 8px;
  border-radius: 4px;
  text-align: left;
  line-height: 1.5;
  background: var(--contrast);
  color: var(--text);
  box-shadow: 0px 2px 4px var(--drop-shadow);

  
  border: 1px solid var(--divider);

  &:hover {
    outline: 1px solid var(--active);
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: var(--active);
  }

  & > svg {
    font-size: 1.3rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `
);

const Listbox = styled("ul")(
  () => `
  font-family: ${crimsonPro.style};
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 8px;
  margin: 12px 0;
  min-width: 175px;
  border-radius: 4px;
  overflow: auto;
  outline: 0px;
  background: var(--contrast);
  color: var(--text);
  box-shadow: 0px 2px 4px  var(--drop-shadow);
  `
);

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 4px;
  border-radius: 4px;
  cursor: default;
  transition: color 0.3s ease;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: var(--primary);
    color: var(--text);
  }

  &.${optionClasses.highlighted} {
    background-color:var(--info);
    color: var(--black);
  }

  &:focus-visible {
    outline: 3px solid var(--active);
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: var(--primary);
    color: var(--white);
  }

  &.${optionClasses.disabled} {
    color:var(--muted);
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: var(--info);
    color: var(--black);
  }
  `
);

const Popup = styled("div")`
  z-index: 1;
`;
