import { Flexbox } from '../../atoms/flexbox/flexbox';
import { FormLabel } from '../../atoms/form-label/form-label';
import { CloseIcon } from '../../icons/close-icon/close-icon';

export interface FormHeaderProps {
  label: string;
  onClose: () => void;
}

export function FormHeader({ label, onClose }: FormHeaderProps) {
  return (
    <Flexbox justify="space-between">
      <FormLabel text={label} />
      <CloseIcon onClick={onClose} />
    </Flexbox>
  );
}
