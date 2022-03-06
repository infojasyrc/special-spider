import { ReactNode } from 'react'
import {
  FormControl,
  // FormHelperText,
  InputLabel,
  Select,
  // MenuItem,
  makeStyles,
  createStyles,
} from '@material-ui/core'

// import LoadingWrapper from '../Loading/LoadingWrapper'

const useStyles = makeStyles(() =>
  createStyles({
    textField: {},
    wideInput: {},
  })
)

export interface SelectWithLoadingProps {
  attributeName: string
  attributeLabel: string
  attributeValue: string
  attributeRequired: boolean
  attributeOptions: ReactNode
  error: boolean
  errorMessage: string
  onChange: () => void
  onBlur: () => void
}

export default function SelectWithLoading({
  attributeName,
  attributeLabel,
  attributeValue,
  attributeRequired,
  attributeOptions,
  onChange,
  onBlur,
}: SelectWithLoadingProps): JSX.Element {
  const classes = useStyles()

  return (
    <FormControl className={[classes.textField, classes.wideInput].join(' ')}>
      <InputLabel required={attributeRequired} htmlFor={attributeName}>
        {attributeLabel}
      </InputLabel>
      <Select
        required={attributeRequired}
        value={attributeValue}
        inputProps={{
          name: attributeName,
          id: attributeName,
        }}
        data-testid="select-with-loader"
        onChange={onChange}
        onBlur={onBlur}
      >
        {attributeOptions}
      </Select>
    </FormControl>
  )
}

// class SelectWithLoading extends Component {
//   render() {
//     const {
//       classes,
//       selectedValue,
//       values,
//       selectName,
//       selectLabel,
//       required,
//       error,
//       errorMessage,
//       onChange,
//       onBlur,
//     } = this.props

//     if (!values) {
//       return (
//         <LoadingWrapper
//           isLoading={true}
//           middlePosition={{
//             top: '30px',
//             left: '190px',
//           }}
//         >
//           <FormControl
//             className={[classes.textField, classes.wideInput].join(' ')}
//           >
//             <InputLabel htmlFor={selectName}>{selectLabel}</InputLabel>
//             <Select
//               disabled
//               value={''}
//               inputProps={{
//                 name: selectName,
//                 id: selectName,
//               }}
//               onChange={onChange}
//             ></Select>
//           </FormControl>
//         </LoadingWrapper>
//       )
//     }

//     const items = values.map((item) => {
//       return (
//         <MenuItem key={item.name} value={item.id}>
//           {item.name}
//         </MenuItem>
//       )
//     })

//     if (error) {
//       return (
//         <FormControl
//           className={[classes.textField, classes.wideInput].join(' ')}
//         >
//           <InputLabel error={true} required={required} htmlFor={selectName}>
//             {selectLabel}
//           </InputLabel>
//           <Select
//             required={required}
//             value={selectedValue}
//             inputProps={{
//               name: selectName,
//               id: selectName,
//             }}
//             onChange={onChange}
//             onBlur={onBlur}
//           >
//             {items}
//           </Select>
//           <FormHelperText error>{errorMessage}</FormHelperText>
//         </FormControl>
//       )
//     }

//     return (
//       <FormControl className={[classes.textField, classes.wideInput].join(' ')}>
//         <InputLabel required={required} htmlFor={selectName}>
//           {selectLabel}
//         </InputLabel>
//         <Select
//           required={required}
//           value={selectedValue}
//           inputProps={{
//             name: selectName,
//             id: selectName,
//           }}
//           onChange={onChange}
//           onBlur={onBlur}
//         >
//           {items}
//         </Select>
//       </FormControl>
//     )
//   }
// }

// export default withStyles(styles)(SelectWithLoading)
