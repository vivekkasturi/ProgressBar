import { fireEvent, render, screen } from '@testing-library/react';
import ProgressBar from './Components/ProgressBar';

test('renders progress bar', () => {
  render(<ProgressBar />);
  const progressBarq = screen.getByText('Progress Bar');
  expect(progressBarq).toBeInTheDocument();
});

test('renders progress bar with 0% prgit push --set-upstream origin masterogress', () => {
  render(<ProgressBar />);
  const progressBarq = screen.getByText('0%');
  expect(progressBarq).toBeInTheDocument();
});

test('Has buttons in the screen', () => {
  render(<ProgressBar />);
  const button = screen.getByText('Increment progress Bar');
  const button2 = screen.getByText('Reset');
  expect(button).toBeInTheDocument();
  expect(button2).toBeInTheDocument();
});

test('Increment progress bar', () => {
  render(<ProgressBar />);
  const button = screen.getByText('Increment progress Bar');
fireEvent.click(button);
  const progressBarq = screen.getByText('10%');
  expect(progressBarq).toBeInTheDocument();
});

test('Reset progress bar', () => {
  render(<ProgressBar />);
  const button = screen.getByText('Reset');
  fireEvent.click(button);
  const progressBarq = screen.getByText('0%');
  expect(progressBarq).toBeInTheDocument();
});
